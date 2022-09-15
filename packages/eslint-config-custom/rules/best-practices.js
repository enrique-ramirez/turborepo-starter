module.exports = {
  rules: {
    "accessor-pairs": "off",
    "array-callback-return": ["error", { allowImplicit: true }],
    "block-scoped-var": "error",
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [],
      },
    ],
    complexity: ["off", 20],
    "consistent-return": "error",
    curly: ["error", "multi-line"],
    "default-case": ["error", { commentPattern: "^no default$" }],
    "default-case-last": "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "default-param-last": "off",
    "dot-location": ["error", "property"],
    // Delegating to @typescript-eslint (check typescript.ts)
    "dot-notation": "off",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "grouped-accessor-pairs": "error",
    "guard-for-in": "error",
    "max-classes-per-file": ["error", 1],
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "error",
    "no-else-return": ["error", { allowElseIf: false }],
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-empty-function": "off",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": ["error", { exceptions: [] }],
    "no-implicit-coercion": [
      "error",
      {
        allow: [],
        boolean: false,
        number: true,
        string: true,
      },
    ],
    "no-implicit-globals": "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-implied-eval": "off",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
    "no-lone-blocks": "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-loop-func": "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-magic-numbers": "off",
    "no-multi-spaces": [
      "error",
      {
        ignoreEOLComments: false,
      },
    ],

    "no-multi-str": "error",
    "no-new": "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-new-func": "off",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: [
          "acc", // for reduce accumulators
          "accumulator", // for reduce accumulators
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "context", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "$scope", // for Angular 1 scopes
          "staticContext", // for ReactRouter context
        ],
        props: true,
      },
    ],
    "no-proto": "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-redeclare": "off",
    "no-restricted-properties": [
      "error",
      {
        message: "arguments.callee is deprecated",
        object: "arguments",
        property: "callee",
      },
      {
        message: "Please use Number.isFinite instead",
        object: "global",
        property: "isFinite",
      },
      {
        message: "Please use Number.isFinite instead",
        object: "self",
        property: "isFinite",
      },
      {
        message: "Please use Number.isFinite instead",
        object: "window",
        property: "isFinite",
      },
      {
        message: "Please use Number.isNaN instead",
        object: "global",
        property: "isNaN",
      },
      {
        message: "Please use Number.isNaN instead",
        object: "self",
        property: "isNaN",
      },
      {
        message: "Please use Number.isNaN instead",
        object: "window",
        property: "isNaN",
      },
      {
        message: "Please use Object.defineProperty instead.",
        property: "__defineGetter__",
      },
      {
        message: "Please use Object.defineProperty instead.",
        property: "__defineSetter__",
      },
      {
        message: "Use the exponentiation operator (**) instead.",
        object: "Math",
        property: "pow",
      },
    ],
    "no-return-assign": ["error", "always"],
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-assign": [
      "error",
      {
        props: true,
      },
    ],
    "no-self-compare": "error",
    "no-sequences": "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-throw-literal": "off",
    "no-unmodified-loop-condition": "off",
    // Delegating to @typescript-eslint (check typescript.ts)
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": [
      "off",
      { location: "start", terms: ["todo", "fixme", "xxx"] },
    ],
    "no-with": "error",
    "prefer-named-capture-group": "off",
    "prefer-object-has-own": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-regex-literals": [
      "error",
      {
        disallowRedundantWrapping: true,
      },
    ],
    radix: "error",
    // Delegating to @typescript-eslint (check typescript.ts)
    "require-await": "off",
    "require-unicode-regexp": "off",
    "vars-on-top": "error",
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
    yoda: "error",
  },
};
