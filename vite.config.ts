import * as path from "path"
import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"
import react from "@vitejs/plugin-react"

import packageJson from "./package.json"
import workspacePackageJson from "./node_modules/@codeforlife/workspace/package.json"

function generateEntries(...indexDirs: string[]) {
  return Object.fromEntries(
    indexDirs.reduce(
      (entries, entry) => {
        const match = entry.match(/^(.+)\.tsx?$/)
        if (!match) throw Error("Entry needs to end with '.ts' or '.tsx'.")

        entries.push([match[1], path.resolve(__dirname, `src/${entry}`)])

        return entries
      },
      [["index", path.resolve(__dirname, "src/index.ts")]],
    ),
  )
}

function getDependencies(packageJson: {
  dependencies?: Record<string, string>
}) {
  return Object.keys(packageJson.dependencies || {})
}

export default defineConfig({
  plugins: [
    react(),
    // https://www.npmjs.com/package/vite-plugin-dts
    dts({
      // Generates the corresponding .d.ts files in the build directory.
      insertTypesEntry: true,
      // Transforms dynamic imports to static (helps with tree-shaking). For
      // example, `import('@mui/material').Button` is transformed to
      // `import { Button } from "@mui/material"`.
      staticImport: true,
      // Generates a single TypeScript declaration file (.d.ts).
      rollupTypes: true,
      // Provide path to client-side TypeScript configuration.
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    // Informs Vite we are building a library.
    lib: {
      entry: generateEntries(
        "api/index.ts",
        "api/endpoints/index.ts",
        "components/index.ts",
        "components/form/index.ts",
        "components/page/index.ts",
        "components/router/index.ts",
        "components/table/index.ts",
        "features/index.ts",
        "hooks/index.ts",
        "middlewares/index.ts",
        "settings/index.ts",
        "slices/index.ts",
        "theme/index.ts",
        "theme/components/index.ts",
        "utils/api.tsx",
        "utils/auth.ts",
        "utils/form.ts",
        "utils/general.ts",
        "utils/router.ts",
        "utils/schema.ts",
        "utils/store.ts",
        "utils/test.tsx",
        "utils/theme.tsx",
        "utils/window.ts",
        "server.ts",
      ),
      name: packageJson.name,
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      cssFileName: "style",
      formats: [
        // ES Modules are the official, standardized module system for
        // JavaScript. They use import and export statements, which are a part
        // of the ECMAScript standard and are supported natively by all modern
        // browsers and recent versions of Node.js.
        "es",
        // CommonJS is the module system used by Node.js. It's a synchronous
        // system designed for server-side development, where files are loaded
        // from the local disk.
        "cjs",
      ],
    },
    rollupOptions: {
      // Tells Rollup which packages should not be bundled in. Why is this
      // important?
      // - Reduces bundle size: Your package will be much smaller if it doesn't
      //  include the entire code for MUI, React, etc.
      // - Efficient caching: The user's browser may already have these common
      //  libraries cached, so not bundling them saves download time.
      external: [
        ...getDependencies(packageJson),
        ...getDependencies(workspacePackageJson),
        "../../../dist/server/entry-server.js",
      ],
    },
    // Vite will output both your built .js file and a corresponding .js.map
    // file. When you install this package in your application and open your
    // browser's developer tools, the tools will automatically detect the source
    // map and show you your original, un-minified code in the "Sources" or
    // "Debugger" panel. This lets you set breakpoints, inspect variables, and
    // step through your code just as if you were working with the original
    // files.
    sourcemap: true,
    // Empty the output directory before writing the build to it.
    emptyOutDir: true,
    // Ensure output directory is "dist".
    outDir: "dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["html", "cobertura"],
    },
  },
})
