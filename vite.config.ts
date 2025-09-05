import * as path from "path"
import { defineConfig } from "vitest/config"
import dts from "vite-plugin-dts"
import react from "@vitejs/plugin-react"

import packageJson from "./package.json"

function generateEntries(...indexDirs: string[]) {
  return Object.fromEntries(
    indexDirs.reduce(
      (entries, indexDir) => {
        const indexPath = `${indexDir}/index`

        entries.push([
          indexPath,
          path.resolve(__dirname, `src/${indexPath}.ts`),
        ])

        return entries
      },
      [["index", path.resolve(__dirname, "src/index.ts")]],
    ),
  )
}

// "./fonts/ttf/*": "./src/fonts/ttf/*.ttf",
// "./images/svg/*": "./src/images/svg/*.svg",
// "./utils/api": "./src/utils/api.tsx",
// "./utils/test": "./src/utils/test.tsx",
// "./utils/theme": "./src/utils/theme.tsx",
// "./utils/*": "./src/utils/*.ts",
// "./server": "./src/server.js"

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
        "api",
        "api/endpoints",
        "components",
        "components/form",
        "components/page",
        "components/router",
        "components/table",
        "features",
        "hooks",
        "middlewares",
        "settings",
        "slices",
        "theme",
        "theme/components",
      ),
      name: packageJson.name,
      fileName: (format, entryName) => `${entryName}.${format}.js`,
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
        ...Object.keys(packageJson.dependencies || {}),
        "@mui/material/OverridableComponent",
        "@mui/material/styles/overrides",
        "@mui/material/styles/createTypography",
        "@mui/material/styles/ThemeProvider",
        "@reduxjs/toolkit/query/react",
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
