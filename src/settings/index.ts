// Shorthand to access environment variables.
export default new Proxy(import.meta.env, {
  get: (target, name: string) => target[`VITE_${name}`] as string,
}) as Record<string, string>

export * from "./custom"
export * from "./vite"
