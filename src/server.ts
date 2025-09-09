/**
 * © Ocado Group
 * Created on 13/12/2024 at 12:15:05(+00:00).
 *
 * A server for an app in a live environment.
 * Based off: https://github.com/bluwy/create-vite-extra/blob/master/template-ssr-react-ts/server.js
 */

import { Cache, type CacheClass } from "memory-cache"
import express, { type Express, type Request, type Response } from "express"
import fs from "node:fs/promises"

type Mode = "development" | "staging" | "production"
type Options = Partial<{
  mode: Mode
  port: number
  base: string
}>

type HealthStatus =
  | "healthy"
  | "startingUp"
  | "shuttingDown"
  | "unhealthy"
  | "unknown"
type HealthCheck = {
  healthStatus: HealthStatus
  additionalInfo: string
  details?: Array<{
    name: string
    description: string
    health: HealthStatus
  }>
}
type HealthCheckResponse = {
  appId: string
  healthStatus: HealthStatus
  lastCheckedTimestamp: string
  additionalInformation: string
  startupTimestamp: string
  appVersion: string
  details: Array<{
    name: string
    description: string
    health: HealthStatus
  }>
}

type Render = (path: string) => Promise<{ head?: string; html?: string }>
type EntryModule = { render: Render }
type RenderAndTemplate = [Render, string]
type GetRenderAndTemplate = (path: string) => Promise<RenderAndTemplate>
type OnServeError = (error: Error) => string | undefined

export default class Server {
  envIsProduction: boolean
  templateHtml: string
  hostname: string
  mode: Mode
  port: number
  base: string
  app: Express
  cache: CacheClass<string, any>
  healthCheckCacheKey: string
  healthCheckCacheTimeout: number
  healthCheckStatusCodes: Record<HealthStatus, number>

  constructor({ mode, port, base }: Options = {}) {
    this.envIsProduction = process.env.NODE_ENV === "production"
    this.templateHtml = ""
    this.hostname = this.envIsProduction ? "0.0.0.0" : "127.0.0.1"

    this.mode = mode || (process.env.MODE as Mode) || "development"
    this.port =
      port ||
      (process.env.PORT
        ? Number(process.env.PORT)
        : this.envIsProduction
          ? 8080
          : 5173)
    this.base = base || process.env.BASE || "/"

    this.app = express()
    this.cache = new Cache()

    this.healthCheckCacheKey = "health-check"
    this.healthCheckCacheTimeout = 30000
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

  // @ts-expect-error unused var
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHealthCheck(request: Request): HealthCheck {
    return {
      healthStatus: "healthy",
      additionalInfo: "All healthy.",
    }
  }

  handleHealthCheck(request: Request, response: Response): void {
    let value: HealthCheckResponse = this.cache.get(
      this.healthCheckCacheKey,
    ) as HealthCheckResponse
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

  async handleServeHtml(
    request: Request,
    response: Response,
    getRenderAndTemplate: GetRenderAndTemplate,
    onServeError: OnServeError,
  ): Promise<void> {
    try {
      const path = request.originalUrl.replace(this.base, "")

      const [render, template] = await getRenderAndTemplate(path)

      const rendered = await render(path)

      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "")

      response.status(200).set({ "Content-Type": "text/html" }).send(html)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.stack)
        const body = onServeError(error)
        response.status(500).end(body)
      }
    }
  }

  async run() {
    this.app.get("/health-check", (request, response) => {
      this.handleHealthCheck(request, response)
    })

    let getRenderAndTemplate: GetRenderAndTemplate
    let onServeError: OnServeError
    if (this.envIsProduction) {
      const compression = (await import("compression")).default
      const sirv = (await import("sirv")).default

      this.templateHtml = await fs.readFile("./dist/client/index.html", "utf-8")

      this.app.use(compression())
      this.app.use(this.base, sirv("./dist/client", { extensions: [] }))

      getRenderAndTemplate = async () => {
        const render = (
          (await import(
            // @ts-expect-error only present after building installing app.
            "../../../dist/server/entry-server.js"
          )) as EntryModule
        ).render

        // Use cached template.
        const template = this.templateHtml

        return [render, template]
      }

      onServeError = () => undefined
    } else {
      const { createServer } = await import("vite")

      const vite = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
        base: this.base,
        mode: this.mode,
      })

      this.app.use(vite.middlewares)

      getRenderAndTemplate = async path => {
        const render = (
          (await vite.ssrLoadModule("/src/entry-server.tsx")) as EntryModule
        ).render

        // Always read fresh template.
        let template = await fs.readFile("./index.html", "utf-8")
        template = await vite.transformIndexHtml(path, template)

        return [render, template]
      }

      onServeError = error => {
        vite.ssrFixStacktrace(error)
        return error.stack
      }
    }

    this.app.get("*", async (request, response) => {
      await this.handleServeHtml(
        request,
        response,
        getRenderAndTemplate,
        onServeError,
      )
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
