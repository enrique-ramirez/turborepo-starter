module.exports = {
  env: {
    node: true,
  },
  rules: {
    "global-require": "error",
    "no-buffer-constructor": "error",
    "no-mixed-requires": ["off", false],
    "no-new-require": "error",
    "no-path-concat": "error",
  },
};
