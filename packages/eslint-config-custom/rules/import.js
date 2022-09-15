module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"],
      },
    },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
    "import/core-modules": [],
    "import/ignore": ["node_modules", "\\.(scss|css|less|hbs|svg|json)$"],
  },
  rules: {
    // Static Analysis
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/no-absolute-path": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",

    // Helpful Warnings
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "off",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**", // tape, common npm pattern
          "tests/**", // also common npm pattern
          "spec/**", // mocha, rspec-like pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{js,jsx}", // repos with a single test file
          "test-*.{js,jsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.js", // jest config
          "**/jest.setup.js", // jest setup
          "**/webpack.config.js", // webpack config
          "**/webpack.config.*.js", // webpack config
          "**/.eslintrc.js", // eslint config
        ],
        optionalDependencies: false,
      },
    ],
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",

    // Module Systems
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "error",

    // Style guide
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "error",
    "import/no-namespace": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        "newlines-between": "always",
        groups: [["builtin", "external", "internal"]],
      },
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": ["off", { allow: "**/*.css" }],
    "import/no-named-default": "error",
    "import/no-default-export": "error",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": [
      "off",
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    "import/group-exports": "off",
    "import/dynamic-import-chunkname": [
      "off",
      {
        importFunctions: [],
        webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
      },
    ],
  },
};
