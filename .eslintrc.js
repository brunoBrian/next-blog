module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import-helpers'],
  rules: {
    indent: ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/jsx-props-no-spreading': 'off',
    'no-console': [2, { allow: ['error'] }],
    'no-param-reassign': [2, { props: false }],
    'no-underscore-dangle': 'off',
    'react/forbid-prop-types': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
