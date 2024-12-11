import fs from "node:fs/promises"
import express from "express"

export default class Server {
  constructor(
    /** @type {Partial<{ mode: "development" | "staging" | "production"; port: number; base: string }>} */
    { mode, port, base } = {},
  ) {
    /** @type {"development" | "staging" | "production"} */
    this.mode = mode || process.env.MODE || "development"
    /** @type {number} */
    this.port = port || (process.env.PORT ? Number(process.env.PORT) : 5173)
    /** @type {string} */
    this.base = base || process.env.BASE || "/"

    /** @type {boolean} */
    this.envIsProduction = process.env.NODE_ENV === "production"
    /** @type {string} */
    this.templateHtml = ""
    /** @type {string} */
    this.hostname = this.envIsProduction ? "0.0.0.0" : "localhost"

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
      const path = request.originalUrl //.replace(this.base, "")

      /** @type {string} */
      let template
      /** @type {(path: string) => Promise<{ head?: string; html?: string }>} */
      let render
      if (this.envIsProduction) {
        render = (await import("./dist/server/entry-server.js")).render

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
      console.log(error.stack)
      response.status(500).end(error.stack)
    }
  }

  async run() {
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

    // Start http server
    this.app.listen(this.port, this.hostname, () => {
      console.log(`Server started at http://${this.hostname}:${this.port}`)
    })
  }
}
