import globals from "globals";
import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
  { languageOptions: { globals: globals.browser, ecmaVersion: 2021 } },
  pluginJs.configs.recommended,
  // ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
];
