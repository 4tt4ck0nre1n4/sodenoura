module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "prettier", // Prettierと競合するルールを無効化
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import"],
  rules: {
    // ベストプラクティス
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "no-undef": "off", // ブラウザグローバル変数やCDNのライブラリを考慮
    "no-var": "error",
    "prefer-const": "error",
    "prefer-arrow-callback": ["warn", { allowNamedFunctions: true }],
    "no-duplicate-imports": "error",

    // Import rules
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^https?://"], // CDNからのインポートを許可
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".mjs", ".cjs"],
      },
      alias: {
        map: [
          ["@", "./src/assets/scss"],
          ["@js", "./src/assets/js"],
        ],
        extensions: [".js", ".mjs", ".cjs", ".json"],
      },
    },
  },
  ignorePatterns: [
    "dist",
    "build",
    "node_modules",
    "*.min.js",
    "vite.config.js",
    "postcss.config.cjs",
  ],
};
