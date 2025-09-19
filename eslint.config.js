import workspaceConfig from "@codeforlife/workspace/eslint.config.js"
import ts from "typescript-eslint"

export default ts.config(
  ...workspaceConfig,
  { ignores: ["src/scripts/*"] },
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
    },
  },
)
