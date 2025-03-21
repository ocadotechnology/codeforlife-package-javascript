/**
 * Shared Vite configuration for all frontend services.
 *
 * Vite: https://vitest.dev/config/
 * Vitest: https://vitest.dev/config/
 *
 * NOTE: This doesn't belong in codeforlife-workspace/configs/frontend as it's
 * still and a script which needs to be included in a Node.js runtime.
 */

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      codeforlife: "codeforlife/src",
    },
  },
  envDir: "env",
  server: {
    open: true,
    host: true,
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
  optimizeDeps: {
    // TODO: investigate which of these are needed
    include: [
      "@mui/x-date-pickers",
      "@mui/x-date-pickers/AdapterDayjs",
      "dayjs",
      "dayjs/locale/en-gb",
      "@mui/icons-material",
      "yup",
      "formik",
    ],
  },
})
