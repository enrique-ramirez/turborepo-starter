/* eslint-disable sort-keys */
module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/node",
    "./rules/style",
    "./rules/es6",
    "./rules/import",
    "./rules/strict",

    "./rules/react",
    "./rules/react-a11y",
    "./rules/react-hooks",
    "./rules/turbo",

    // NOTE: It is important that prettier rules come last.
    "./rules/prettier",
  ].map(require.resolve),
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["**/*.map"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {},
};
