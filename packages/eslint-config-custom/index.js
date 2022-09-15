module.exports = {
  extends: ["./base", "./rules/typescript", "./rules/prettier"].map(
    require.resolve
  ),
  ignorePatterns: ["*.js", "*.jsx", "*.cjs"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {},
};
