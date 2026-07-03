import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig([
  globalIgnores([
    'cypress/support/*',
    '.next/**',
    'node_modules/**',
    'next.config.js',
    'jest.config.js',
    'postcss.config.js',
    'cypress.config.ts',
    'coverage/**'
  ]),
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['next.config.js', 'cypress/**'],
    
    plugins: {
      react,
      prettier,
      '@typescript-eslint': tseslint,
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
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
      'no-undef': 'off', // TypeScript handles this
      'no-unused-vars': 'off', // Use TypeScript's version
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'no-case-declarations': 'off',
      'no-useless-return': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
])
