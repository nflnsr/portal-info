/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint/express.js", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: module,
    project: true,
  },
};
