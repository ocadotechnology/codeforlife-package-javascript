import fs from "node:fs/promises"
import express from "express"

export default class Server {
  constructor(
    /** @type {Partial<{ env: "local" | "development" | "staging" | "production"; port: number; base: string }>} */
    { env, port, base } = {},
  ) {
    /** @type {boolean} */
    this.isLocal = (env || process.env.NODE_ENV) === "local"
    /** @type {number} */
    this.port = port || (process.env.PORT ? Number(process.env.PORT) : 5173)
    /** @type {string} */
    this.base = base || process.env.BASE || "/"
    /** @type {string} */
    this.hostname = this.isLocal ? "localhost" : "0.0.0.0"
    /** @type {string} */
    this.templateHtml = ""

    /** @type {Express} */
    this.app = express()
    this.app.get("/health-check", this.handleHealthCheck)
    this.app.get("*", this.handleServeHtml)

    /** @type {import('vite').ViteDevServer | undefined} */
    this.vite = undefined
  }

  /** @type {(request: Request) => { healthStatus: "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown"; additionalInfo: string; details?: Array<{ name: string; description: string; health: "healthy" | "startingUp" | "shuttingDown" | "unhealthy" | "unknown"; }> }} */
  getHealthCheck(request) {
    return {
      healthStatus: "healthy",
      additionalInfo: "All healthy.",
    }
  }

  /** @type {(request: Request, response: Response) => void} */
  handleHealthCheck(request, response) {
    const healthCheck = this.getHealthCheck(request)

    response.json({
      appId: process.env.APP_ID,
      healthStatus: healthCheck.healthStatus,
      lastCheckedTimestamp: new Date().toISOString(),
      additionalInformation: healthCheck.additionalInfo,
      startupTimestamp: new Date().toISOString(),
      appVersion: process.env.APP_VERSION,
      details: healthCheck.details || [],
    })
  }

  /** @type {(request: Request, response: Response) => Promise<void>} */
  async handleServeHtml(request, response) {
    try {
      const url = request.originalUrl //.replace(this.base, "")

      /** @type {string} */
      let template
      /** @type {(url: string) => Promise<{ head?: string; html?: string }>} */
      let render
      if (this.isLocal) {
        // Always read fresh template.
        template = await fs.readFile("./index.html", "utf-8")
        template = await this.vite.transformIndexHtml(url, template)
        render = (await this.vite.ssrLoadModule("/src/entry-server.tsx")).render
      } else {
        render = (await import("./dist/server/entry-server.js")).render

        // Use cached template.
        template = this.templateHtml
      }

      const rendered = await render(url)

      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "")

      response.status(200).set({ "Content-Type": "text/html" }).send(html)
    } catch (error) {
      this.vite?.ssrFixStacktrace(error)
      console.log(error.stack)
      response.status(500).end(error.stack)
    }
  }

  async run() {
    if (this.isLocal) {
      const { createServer } = await import("vite")

      this.vite = await createServer({
        server: { middlewareMode: true },
        appType: "custom",
        base: this.base,
      })

      this.app.use(this.vite.middlewares)
    } else {
      const compression = (await import("compression")).default
      const sirv = (await import("sirv")).default

      this.templateHtml = await fs.readFile("./dist/client/index.html", "utf-8")

      this.app.use(compression())
      this.app.use(this.base, sirv("./dist/client", { extensions: [] }))
    }

    // Start http server
    this.app.listen(this.port, this.hostname, () => {
      console.log(`Server started at http://${this.hostname}:${this.port}`)
    })
  }
}
