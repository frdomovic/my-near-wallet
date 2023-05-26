module.exports = {
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:i18next/recommended',
        'prettier',
    ],
    plugins: ['es', '@typescript-eslint'],
    rules: {
        'i18next/no-literal-string': 'off',
        'arrow-parens': 'error',
        'brace-style': 'error',
        curly: ['error'],
        'es/no-dynamic-import': 'error',
        'jsx-a11y/no-access-key': 'off',
        'no-useless-escape': 'off',
        quotes: [2, 'single'],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
            },
        ],
        'no-duplicate-imports': ['error', { includeExports: true }],
        'eol-last': ['error', 'always'],
        semi: ['error', 'always'],
        'no-console': 'off',
        'no-extra-boolean-cast': 'off',
        'no-extra-semi': 'off',
        'no-irregular-whitespace': 'off',
        'import/named': ['error', 'always'],
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
                groups: [
                    'builtin',
                    ['external', 'internal'],
                    ['sibling', 'parent', 'index'],
                    'object',
                ],
            },
        ],
        'max-statements-per-line': ['error', { max: 1 }],
        'no-process-env': ['error'],
        'no-restricted-globals': [
            'error',
            {
                name: 'URLSearchParams',
                message: 'Use `query-string` package instead',
            },
        ],
        'no-restricted-syntax': [
            'error',
            {
                selector: `VariableDeclarator[id.type='ObjectPattern'] Property[key.name='searchParams']`,
                message:
                    'URL.searchParams is not allowed, Use `query-string` package instead',
            },
            {
                selector: `CallExpression[callee.name='useSelector'] MemberExpression[object.name='state']`,
                message:
                    'Please use a selector for any state accesses within useSelector',
            },
            {
                selector: `CallExpression[callee.name='useSelector'] VariableDeclarator[id.type='ObjectPattern'][init.name='state']`,
                message:
                    'Please use a selector for any state accesses within useSelector',
            },
            {
                selector: `CallExpression[callee.name='useSelector'] *[type=/FunctionExpression$/][params.0.type='ObjectPattern']`,
                message:
                    'Please use a selector for any state accesses within useSelector',
            },
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                arrow: 'parens',
                condition: 'parens-new-line',
                declaration: 'parens-new-line',
                logical: 'parens-new-line',
                return: 'parens-new-line',
            },
        ],
        'space-before-blocks': ['error'],
    },
    parser: '@typescript-eslint/parser',
    settings: {
        'import/ignore': ['packages/frontend/src/config/*'],
    },
    overrides: [
        {
            files: [
                'packages/frontend/src/config/configFromEnvironment.ts',
                'packages/frontend/ci/config.js',
                'packages/e2e-tests/**',
            ],
            rules: {
                'no-process-env': ['off'],
            },
        },
        {
            files: ['*.ts'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
    root: true,
};
