import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { ESLint } from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

export default {
  ignores: ["dist"],
  extends: [js.configs.recommended, "plugin:@typescript-eslint/recommended"],
  files: ["**/*.{ts,tsx,mjs}"],
  parser: parser,
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
