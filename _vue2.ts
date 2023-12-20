export = {
  plugins: ["vue"],
  extends: ["plugin:vue/vue-recommended"],
  env: {
    browser: true,
    jest: true,
    //es2021,
  },
  globals: {},
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    // 默认包含.ts .d.ts
    extraFileExtensions: [".vue", "tsx"],
    // 传递project传递@typescript-eslint 提供的额外的以来类型的检查，缺点是会导致eslint整体检查过程会比较慢
    project: ["./tsconfig.json"],
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "import/no-unresolved": "off",
        "@typescript-eslint/no-use-before-define": "off",
      },
    },
  ],
  rules: {
    // Vue.component.name 遵循 kebab-case 命名规则
    "vue/component-definition-name-casing": ["error", "kebab-case"],
  },
};
