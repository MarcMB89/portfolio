module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'comma-dangle': [2, 'never'],
    'linebreak-style': 0,
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows']
  }
};
