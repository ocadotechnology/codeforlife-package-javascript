import { Cache as l } from "memory-cache";
import p from "express";
import o from "node:fs/promises";
class v {
  envIsProduction;
  templateHtml;
  hostname;
  mode;
  port;
  base;
  app;
  cache;
  healthCheckCacheKey;
  healthCheckCacheTimeout;
  healthCheckStatusCodes;
  constructor({ mode: s, port: h, base: e } = {}) {
    this.envIsProduction = process.env.NODE_ENV === "production", this.templateHtml = "", this.hostname = this.envIsProduction ? "0.0.0.0" : "127.0.0.1", this.mode = s || process.env.MODE || "development", this.port = h || (process.env.PORT ? Number(process.env.PORT) : this.envIsProduction ? 8080 : 5173), this.base = e || process.env.BASE || "/", this.app = p(), this.cache = new l(), this.healthCheckCacheKey = "health-check", this.healthCheckCacheTimeout = 3e4, this.healthCheckStatusCodes = {
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
      unknown: 503
    };
  }
  // @ts-expect-error unused var
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHealthCheck(s) {
    return {
      healthStatus: "healthy",
      additionalInfo: "All healthy."
    };
  }
  handleHealthCheck(s, h) {
    let e = this.cache.get(
      this.healthCheckCacheKey
    );
    if (e === null) {
      const t = this.getHealthCheck(s);
      t.healthStatus !== "healthy" && console.warn(`health check: ${JSON.stringify(t)}`), e = {
        appId: process.env.APP_ID || "REPLACE_ME",
        healthStatus: t.healthStatus,
        lastCheckedTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
        additionalInformation: t.additionalInfo,
        startupTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
        appVersion: process.env.APP_VERSION || "REPLACE_ME",
        details: t.details || []
      }, this.cache.put(
        this.healthCheckCacheKey,
        e,
        this.healthCheckCacheTimeout
      );
    }
    h.status(this.healthCheckStatusCodes[e.healthStatus]).json(e);
  }
  async handleServeHtml(s, h, e, t) {
    try {
      const a = s.originalUrl.replace(this.base, ""), [i, r] = await e(a), n = await i(a), c = r.replace("<!--app-head-->", n.head ?? "").replace("<!--app-html-->", n.html ?? "");
      h.status(200).set({ "Content-Type": "text/html" }).send(c);
    } catch (a) {
      if (a instanceof Error) {
        console.error(a.stack);
        const i = t(a);
        h.status(500).end(i);
      }
    }
  }
  async run() {
    this.app.get("/health-check", (e, t) => {
      this.handleHealthCheck(e, t);
    });
    let s, h;
    if (this.envIsProduction) {
      const e = (await import("compression")).default, t = (await import("sirv")).default;
      this.templateHtml = await o.readFile("./dist/client/index.html", "utf-8"), this.app.use(e()), this.app.use(this.base, t("./dist/client", { extensions: [] })), s = async () => {
        const a = (await import(
          // @ts-expect-error only present after building installing app.
          "../../../dist/server/entry-server.js"
        )).render, i = this.templateHtml;
        return [a, i];
      }, h = () => {
      };
    } else {
      const { createServer: e } = await import("vite"), t = await e({
        server: { middlewareMode: !0 },
        appType: "custom",
        base: this.base,
        mode: this.mode
      });
      this.app.use(t.middlewares), s = async (a) => {
        const i = (await t.ssrLoadModule("/src/entry-server.tsx")).render;
        let r = await o.readFile("./index.html", "utf-8");
        return r = await t.transformIndexHtml(a, r), [i, r];
      }, h = (a) => (t.ssrFixStacktrace(a), a.stack);
    }
    this.app.get("*", async (e, t) => {
      await this.handleServeHtml(
        e,
        t,
        s,
        h
      );
    }), this.app.listen(this.port, this.hostname, () => {
      let e = `Server started.
url: http://${this.hostname}:${this.port}
environment: ${process.env.NODE_ENV}
`;
      this.envIsProduction || (e += `mode: ${this.mode}
`), console.log(e);
    });
  }
}
export {
  v as default
};
//# sourceMappingURL=server.es.js.map
