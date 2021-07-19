module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "arrow-body-style": "off",
    "arrow-parens": ["error", "as-needed", { requireForBlockBody: false }],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "import/first": "off",
    "no-restricted-syntax": "off",
    "import/no-unresolved": "off",
    "no-mixed-operators": "off",
    "function-paren-newline": "off",
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": ["error",
      { "singleQuote": true }
    ]
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript"
  ]
};
