import { Cache as l } from "memory-cache";
import { randomUUID as p } from "node:crypto";
import d from "express";
import i from "node:fs/promises";
import m from "node:http";
class S {
  envIsProduction;
  templateHtml;
  hostname;
  mode;
  port;
  base;
  app;
  server;
  cache;
  healthCheckCacheKey;
  healthCheckCacheTimeout;
  healthCheckStatusCodes;
  devtoolsWorkspaceUUID;
  constructor({ mode: h, port: e, base: t } = {}) {
    this.envIsProduction = process.env.NODE_ENV === "production", this.templateHtml = "", this.hostname = this.envIsProduction ? "0.0.0.0" : "127.0.0.1", this.mode = h || process.env.MODE || "development", this.port = e || (process.env.PORT ? Number(process.env.PORT) : this.envIsProduction ? 8080 : 5173), this.base = t || process.env.BASE || "/", this.app = d(), this.server = m.createServer(this.app), this.cache = new l(), this.healthCheckCacheKey = "health-check", this.healthCheckCacheTimeout = 3e4, this.healthCheckStatusCodes = {
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
    }, this.devtoolsWorkspaceUUID = p();
  }
  // @ts-expect-error unused var
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHealthCheck(h) {
    return {
      healthStatus: "healthy",
      additionalInfo: "All healthy."
    };
  }
  handleHealthCheck(h, e) {
    let t = this.cache.get(
      this.healthCheckCacheKey
    );
    if (t === null) {
      const s = this.getHealthCheck(h);
      s.healthStatus !== "healthy" && console.warn(`health check: ${JSON.stringify(s)}`), t = {
        appId: process.env.APP_ID || "REPLACE_ME",
        healthStatus: s.healthStatus,
        lastCheckedTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
        additionalInformation: s.additionalInfo,
        startupTimestamp: (/* @__PURE__ */ new Date()).toISOString(),
        appVersion: process.env.APP_VERSION || "REPLACE_ME",
        details: s.details || []
      }, this.cache.put(
        this.healthCheckCacheKey,
        t,
        this.healthCheckCacheTimeout
      );
    }
    e.status(this.healthCheckStatusCodes[t.healthStatus]).json(t);
  }
  async handleServeHtml(h, e, { getRenderAndTemplate: t, onServeError: s }) {
    try {
      const a = h.originalUrl.replace(this.base, ""), [o, n] = await t(a), r = await o(a), c = n.replace("<!--app-head-->", r.head ?? "").replace("<!--app-html-->", r.html ?? "");
      e.status(200).set({ "Content-Type": "text/html" }).send(c);
    } catch (a) {
      if (a instanceof Error) {
        console.error(a.stack);
        const o = s(a);
        e.status(500).end(o);
      }
    }
  }
  // @ts-expect-error unused var
  handleChromeDevTools(h, e) {
    if (this.envIsProduction)
      e.status(404).json({});
    else {
      const t = process.env.LOCAL_WORKSPACE_PATH;
      let s, a;
      t ? (s = 200, a = {
        workspace: {
          uuid: this.devtoolsWorkspaceUUID,
          root: t
        }
      }) : (s = 404, a = { error: "Local workspace path not configured." }), e.status(s).json(a);
    }
  }
  async setUpProduction() {
    const h = (await import("compression")).default, e = (await import("sirv")).default;
    return this.templateHtml = await i.readFile("./dist/client/index.html", "utf-8"), this.app.use(h()), this.app.use(this.base, e("./dist/client", { extensions: [] })), {
      getRenderAndTemplate: async () => {
        const t = (await import(
          // @ts-expect-error only present after building installing app.
          "../../../dist/server/entry-server.js"
        )).render, s = this.templateHtml;
        return [t, s];
      },
      onServeError: () => {
      }
    };
  }
  async setUpDevelopment() {
    const { createServer: h } = await import("vite"), e = await h({
      configFile: "/workspace/frontend/vite.config.ts",
      server: {
        middlewareMode: !0,
        hmr: { server: this.server }
      },
      appType: "custom",
      base: this.base,
      mode: this.mode
    });
    return this.app.use(e.middlewares), {
      getRenderAndTemplate: async (t) => {
        const s = (await e.ssrLoadModule("/src/entry-server.tsx")).render;
        let a = await i.readFile("./index.html", "utf-8");
        return a = await e.transformIndexHtml(t, a), [s, a];
      },
      onServeError: (t) => (e.ssrFixStacktrace(t), t.stack)
    };
  }
  async run() {
    const h = this.envIsProduction ? await this.setUpProduction() : await this.setUpDevelopment();
    this.app.get("/health-check", (e, t) => {
      this.handleHealthCheck(e, t);
    }), this.app.get(
      "/.well-known/appspecific/com.chrome.devtools.json",
      (e, t) => {
        this.handleChromeDevTools(e, t);
      }
    ), this.app.get("*", async (e, t) => {
      await this.handleServeHtml(e, t, h);
    }), this.server.listen(this.port, this.hostname, () => {
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
  S as default
};
//# sourceMappingURL=server.es.js.map
