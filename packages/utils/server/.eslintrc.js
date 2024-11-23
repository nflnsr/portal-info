/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint/express.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: module,
  },
};
