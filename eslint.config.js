import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 'assets' e 'cop-dashboard' são artefatos de build antigos commitados na
  // raiz (JS/CSS minificado) — não são código-fonte e não devem ser lintados.
  // Os padrões precisam ser recursivos: 'dist' sozinho só casa na raiz, e
  // worktrees do git em .claude/ têm o próprio dist/ — sem '**/' o lint
  // tentava analisar bundle minificado e cuspia ~100 erros falsos.
  globalIgnores([
    '**/dist/**',
    '**/assets/**',
    '**/cop-dashboard/**',
    '.claude/worktrees/**',
  ]),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
