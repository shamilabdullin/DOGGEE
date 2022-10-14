module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //'plugin:react/recommended',
    // 'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'C:/Users/Asus/Desktop/Обучение React/doggee/tsconfig.json',
  },
  plugins: ['prettier'],
  //'react', '@typescript-eslint',
  rules: {
    'prettier/prettier': 'error',
    'require-jsdoc': 'off',
    'no-unused-vars': 'warn',
  },
};
