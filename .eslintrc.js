module.exports = {
  extends: ['react-app'],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json'
      },
      extends: ['airbnb-typescript'],
      rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': 'off',
        'no-console': 'off'
      }
    }
  ]
};
