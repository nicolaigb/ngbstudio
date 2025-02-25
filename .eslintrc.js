module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'position',
          'args',
          'fragmentShader',
          'vertexShader',
          'uniforms',
          'side',
          'attach',
          'geometry',
          'material',
          'rotation',
          'scale',
          'intensity',
          'map',
          'color',
          'castShadow',
          'receiveShadow',
          'dispose',
          'metalness',
          'roughness',
          'normal',
          'aoMap',
          'envMap',
          'wireframe',
        ],
      },
    ],
    'react/function-component-definition': [
      1,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'max-len': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'semi': 'off',
    'no-underscore-dangle': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
  settings: {
    next: {
      rootDir: '.',
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};