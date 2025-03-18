// Shorthand to access environment variables.
export default Object.defineProperty(import.meta.env, "vite", {
  writable: false,
  value: new Proxy(import.meta.env, {
    get: (target, name: string) => target[`VITE_${name}`],
  }),
}) as ImportMetaEnv & { vite: Record<string, string> }

export * from "./custom"
export * from "./vite"
