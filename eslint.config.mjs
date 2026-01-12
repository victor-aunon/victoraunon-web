import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores(['cypress/support/*']),
  {
    extends: [
      ...compat.extends('plugin:react/recommended'),
      ...compat.extends('standard-with-typescript'),
      ...compat.extends('prettier'),
    ],

    plugins: {
      react,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },

    settings: {
      react: {
        pragma: 'React',
        version: '18.2.0',
      },
      next: {
        rootDir: __dirname,
      },
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'no-case-declarations': 'off',
      'no-useless-return': 'off',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
])
