module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb-typescript', 'prettier'],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
  },
};
