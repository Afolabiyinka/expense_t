import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
// @ts-ignore
import reactHooks from "eslint-plugin-react-hooks";

import reactRefresh from "eslint-plugin-react-refresh";

export default {
  ignores: ["dist"],

  overrides: [
    {
      files: ["**/*.{js,jsx}"],

      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
        },
      },

      settings: {
        react: { version: "detect" }, // automatically detect React version
      },

      plugins: {
        react,
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },

      rules: {
        // Base JS rules
        ...js.configs.recommended.rules,

        // React rules
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,

        // React Hooks rules
        ...reactHooks.configs.recommended.rules,

        // React Refresh
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],

        // Custom overrides
        "react/jsx-no-target-blank": "off",
      },
    },
  ],
};
