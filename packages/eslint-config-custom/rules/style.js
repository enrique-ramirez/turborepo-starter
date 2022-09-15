const confusingBrowserGlobals = require("confusing-browser-globals");

module.exports = {
  rules: {
    "array-bracket-newline": ["error", { multiline: true }],
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    // Delegating to @typescript-eslint (check typescript.ts)
    "brace-style": "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    camelcase: "off",
    "capitalized-comments": [
      "off",
      "never",
      {
        block: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: ".*",
        },
        line: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: ".*",
        },
      },
    ],
    // Delegating to @typescript-eslint (check typescript.ts)
    "comma-dangle": "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    "comma-spacing": "off",
    "comma-style": [
      "error",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          NewExpression: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
        },
      },
    ],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": "off",
    "eol-last": ["error", "always"],
    // Delegating to @typescript-eslint (check typescript.ts)
    "func-call-spacing": "off",
    "func-name-matching": [
      "off",
      "always",
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    "func-names": "warn",
    "func-style": ["off", "expression"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "multiline-arguments"],
    "implicit-arrow-linebreak": ["error", "beside"],
    // Delegating to @typescript-eslint (check typescript.ts)
    indent: "off",
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { afterColon: true, beforeColon: false }],
    // Delegating to @typescript-eslint (check typescript.ts)
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": ["error", "unix"],
    // Delegating to @typescript-eslint (check typescript.ts)
    "lines-between-class-members": "off",
    "max-len": [
      "error",
      100,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "new-cap": [
      "error",
      {
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
        newIsCap: true,
        newIsCapExceptions: [],
      },
    ],
    "new-parens": "error",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-array-constructor": "off",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error",
      {
        allowSamePrecedence: false,
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
      },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": ["error"],
    "no-multiple-empty-lines": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-restricted-globals": [
      "error",
      {
        message: "Use Number.isFinite instead to avoid type coercion.",
        name: "isFinite",
      },
      {
        message: "Use Number.isNaN instead to avoid type coercion.",
        name: "isNaN",
      },
    ].concat(confusingBrowserGlobals),
    "no-restricted-syntax": [
      "error",
      {
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      {
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        selector: "ForOfStatement",
      },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        selector: "WithStatement",
      },
    ],
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-shadow": "off",
    "no-shadow-restricted-names": "error",
    "no-tabs": "error",
    "no-trailing-spaces": [
      "error",
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    "no-undef": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": [
      "error",
      {
        allow: ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"],
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: true,
      },
    ],
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-unused-vars": "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-use-before-define": "off",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],
    "object-curly-newline": [
      "error",
      {
        ExportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ObjectExpression: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
        ObjectPattern: { consistent: true, minProperties: 4, multiline: true },
      },
    ],
    // Delegating to @typescript-eslint (check typescript.ts)
    "object-curly-spacing": "off",
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": ["error", "always"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        classes: "never",
        switches: "never",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": [
      "error",
      "as-needed",
      { keywords: false, numbers: false, unnecessary: true },
    ],
    // Delegating to @typescript-eslint (check typescript.ts)
    quotes: "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    semi: "off",
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "sort-keys": "warn",
    // Delegating to @typescript-eslint (check typescript.ts)
    "space-before-blocks": "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    // Delegating to @typescript-eslint (check typescript.ts)
    "space-infix-ops": "off",
    "space-unary-ops": [
      "error",
      {
        nonwords: false,
        overrides: {},
        words: true,
      },
    ],
    "spaced-comment": [
      "error",
      "always",
      {
        block: {
          balanced: true,
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"],
        },
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/", "#"],
        },
      },
    ],
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"],
  },
};
