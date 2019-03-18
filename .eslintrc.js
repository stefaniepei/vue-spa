module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "semi": ["error", "never"],
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "single" ],
    "no-console": 1,
    "no-debugger": 1,
    "no-alert": 1,
    "require-await": 1,
    "require-yield": 1,
    "no-var": 1,
    "arrow-spacing": 1,
    "space-in-parens": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "comma-spacing": ["error", { "before": false, "after": true}],
    "no-template-curly-in-string": 1,
    "array-callback-return": 1,
    "consistent-return": ["error", {"treatUndefinedAsUnspecified": true}],
    "default-case": 1,
    "no-div-regex": 1,
    "no-else-return": 1,
    "no-eq-null": 1,
    "no-eval": 1,
    "no-multi-spaces": 1,
    "no-multi-str": 1,
    "no-magic-numbers": [1, { "ignoreArrayIndexes": true, "ignore": [1, 0, -1], }],
    "comma-dangle": 1,
    "space-before-blocks": 1,
  }
}
