// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["vue", "html"],
  rules: {
    semi: "error",
    quotes: ["error", "double"],
    "object-curly-spacing": ["error", "always"],
  },
};