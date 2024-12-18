/**
 * © Ocado Group
 * Created on 13/12/2024 at 12:15:05(+00:00).
 *
 * A server for an app in a live environment.
 * Based off: https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-react-ts/server.js
 */

import fs from "node:fs/promises"
import express from "express"
import { Cache } from "memory-cache"

export default class Server {
  constructor(
    /** @type {Partial<{ mode: "development" | "staging" | "production"; port: number; base: string }>} */
    { mode, port, base } = {},
  ) {
    /** @type {boolean} */
    this.envIsProduction = process.env.NODE_ENV === "production"
    /** @type {string} */
    this.templateHtml = ""
    /** @type {string} */
    this.hostname = this.envIsProduction ? "0.0.0.0" : "127.0.0.1"

    /** @type {"development" | "staging" | "production"} */
    this.mode = mode || process.env.MODE || "development"
    /** @type {number} */
    this.port =
      port ||
      (process.env.PORT
        ? Number(process.env.PORT)
        : this.envIsProduction
          ? 8080
          : 5173)
    /** @type {string} */
    this.base = base || process.env.BASE || "/"

    /** @type {import('express').Express} */
    this.app = express()
    /** @type {import('vite').ViteDevServer | undefined} */
    this.vite = undefined
    /** @type {import('memory-cache').Cache<string, any>} */
    this.cache = new Cache()

    /** @type {string} */
    this.healthCheckCacheKey = "health-check"
    /** @type {number} */
    this.healthCheckCacheTimeout = 30000
    /** @type {Record<"healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown", number>} */
    this.healthCheckStatusCodes = {
      // The app is running normally.
      healthy: 200,
      // The app is performing app-specific initialisation which must
      // complete before it will serve normal application requests
      // (perhaps the app is warming a cache or something similar). You
      // only need to use this status if your app will be in a start-up
      // mode for a prolonged period of time.
      startingUp: 503,
      // The app is shutting down. As with startingUp, you only need to
      // use this status if your app takes a prolonged amount of time
      // to shutdown, perhaps because it waits for a long-running
      // process to complete before shutting down.
      shuttingDown: 503,
      // The app is not running normally.
      unhealthy: 503,
      // The app is not able to report its own state.
      unknown: 503,
    }
  }

  /** @type {(request: import('express').Request) => { healthStatus: "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown"; additionalInfo: string; details?: Array<{ name: string; description: string; health: "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown" }> }} */
  getHealthCheck(request) {
    return {
      healthStatus: "healthy",
      additionalInfo: "All healthy.",
    }
  }

  /** @type {(request: import('express').Request, response: import('express').Response) => void} */
  handleHealthCheck(request, response) {
    /** @type {{ appId: string; healthStatus: "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown"; lastCheckedTimestamp: string; additionalInformation: string; startupTimestamp: string; appVersion: string; details: Array<{ name: string; description: string; health: "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown" }> }} */
    let value = this.cache.get(this.healthCheckCacheKey)
    if (value === null) {
      const healthCheck = this.getHealthCheck(request)

      if (healthCheck.healthStatus !== "healthy") {
        console.warn(`health check: ${JSON.stringify(healthCheck)}`)
      }

      value = {
        appId: process.env.APP_ID || "REPLACE_ME",
        healthStatus: healthCheck.healthStatus,
        lastCheckedTimestamp: new Date().toISOString(),
        additionalInformation: healthCheck.additionalInfo,
        startupTimestamp: new Date().toISOString(),
        appVersion: process.env.APP_VERSION || "REPLACE_ME",
        details: healthCheck.details || [],
      }

      this.cache.put(
        this.healthCheckCacheKey,
        value,
        this.healthCheckCacheTimeout,
      )
    }

    response.status(this.healthCheckStatusCodes[value.healthStatus]).json(value)
  }

  /** @type {(request: import('express').Request, response: import('express').Response) => Promise<void>} */
  async handleServeHtml(request, response) {
    try {
      const path = request.originalUrl.replace(this.base, "")

      /** @type {string} */
      let template
      /** @type {(path: string) => Promise<{ head?: string; html?: string }>} */
      let render
      if (this.envIsProduction) {
        render = (await import("../../../dist/server/entry-server.js")).render

        // Use cached template.
        template = this.templateHtml
      } else {
        render = (await this.vite.ssrLoadModule("/src/entry-server.tsx")).render

        // Always read fresh template.
        template = await fs.readFile("./index.html", "utf-8")
        template = await this.vite.transformIndexHtml(path, template)
      }

      const rendered = await render(path)

      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "")

      response.status(200).set({ "Content-Type": "text/html" }).send(html)
    } catch (error) {
      this.vite?.ssrFixStacktrace(error)
      console.error(error.stack)
      response.status(500).end(this.envIsProduction ? undefined : error.stack)
    }
  }

  async run() {
    this.app.get("/health-check", (request, response) => {
      this.handleHealthCheck(request, response)
    })

    if (this.envIsProduction) {
      const compression = (await import("compression")).default
      const sirv = (await import("sirv")).default

      this.templateHtml = await fs.readFile("./dist/client/index.html", "utf-8")

      this.app.use(compression())
      this.app.use(this.base, sirv("./dist/client", { extensions: [] }))
    } else {
      const { createServer } = await import("vite")

      this.vite = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
        base: this.base,
        mode: this.mode,
      })

      this.app.use(this.vite.middlewares)
    }

    this.app.get("*", async (request, response) => {
      await this.handleServeHtml(request, response)
    })

    this.app.listen(this.port, this.hostname, () => {
      let startMessage =
        "Server started.\n" +
        `url: http://${this.hostname}:${this.port}\n` +
        `environment: ${process.env.NODE_ENV}\n`

      if (!this.envIsProduction) startMessage += `mode: ${this.mode}\n`

      console.log(startMessage)
    })
  }
}
