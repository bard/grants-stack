module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  env: { node: true },
  rules: {
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    'import/no-default-export': 'error',
  },
}
