module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },

  extends: [
    '@strv/react',
    '@strv/react/optional',
    '@strv/typescript',
    'prettier',
  ],

  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },

  overrides: [
    {
      files: '*.page.*',
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: '*.test.*',
      rules: {
        '@typescript-eslint/no-shadow': ['error', { allow: ['screen'] }],
      },
    },
  ],
};
