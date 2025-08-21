import workspaceConfig from "@codeforlife/workspace/eslint.config.js"
import ts from "typescript-eslint"

export default ts.config(
  ...workspaceConfig,
  {
    ignores: [
      "src/scripts/*",
      "src/server.js", // TODO: convert to src/server.ts and remove this ignore
    ],
  },
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
    },
  },
)
