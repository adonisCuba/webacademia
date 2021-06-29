module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended'
    // 'prettier'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {}
}
