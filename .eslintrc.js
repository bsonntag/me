module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'flowtype/delimiter-dangle': [
      'error',
      'always-multiline',
    ],
    'no-confusing-arrow': 'off',
    'switch-case/newline-between-switch-case': ['error', 'never']
  },
};
