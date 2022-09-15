/* eslint-disable sort-keys */
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "typescript-sort-keys"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
  },
  rules: {
    "brace-style": "off",
    "@typescript-eslint/brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: true },
    ],

    camelcase: "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        selector: "variable",
      },
      {
        format: ["camelCase", "PascalCase"],
        selector: "function",
      },
      {
        format: ["PascalCase"],
        selector: "typeLike",
      },
    ],

    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        enums: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        generics: "always-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
        tuples: "always-multiline",
      },
    ],

    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": [
      "error",
      { before: false, after: true },
    ],

    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "error",

    "dot-notation": "off",
    "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],

    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],

    indent: "off",
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ImportDeclaration: 1,
        // MemberExpression: null,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        outerIIFEBody: 1,
      },
    ],

    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": [
      "error",
      {
        after: true,
        before: true,
        overrides: {
          case: { after: true },
          return: { after: true },
          throw: { after: true },
        },
      },
    ],

    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: false },
    ],

    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",

    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "error",

    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],

    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": [
      "off",
      "all",
      {
        conditionalAssign: true,
        enforceForArrowConditionals: false,
        ignoreJSX: "all",
        nestedBinaryExpressions: false,
        returnAssign: false,
      },
    ],

    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",

    "no-implied-eval": "off",
    "no-new-func": "off",
    "@typescript-eslint/no-implied-eval": "error",

    "no-loss-of-precision": "off",
    "@typescript-eslint/no-loss-of-precision": "error",

    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "error",

    "no-magic-numbers": "off",
    "@typescript-eslint/no-magic-numbers": [
      "off",
      {
        detectObjects: false,
        enforceConst: true,
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",

    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "error",

    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { args: "after-used", ignoreRestSiblings: true, vars: "all" },
    ],

    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { classes: true, functions: true, variables: true },
    ],

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    quotes: "off",
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],

    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],

    "require-await": "off",
    "@typescript-eslint/require-await": "warn",

    "no-return-await": "off",
    "@typescript-eslint/return-await": ["error", "in-try-catch"],

    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",

    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",

    "@typescript-eslint/no-explicit-any": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "constructor-super": "off",
        "getter-return": "off",
        "import/named": "off",
        "import/no-named-as-default-member": "off",
        "import/no-unresolved": "off",
        "no-const-assign": "off",
        "no-dupe-args": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-symbol": "off",
        "no-obj-calls": "off",
        "no-redeclare": "off",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-undef": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "valid-typeof": "off",
      },
    },
  ],
};
