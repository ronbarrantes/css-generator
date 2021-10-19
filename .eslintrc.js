module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": ["error", "unix"],
		quotes: ['warn', 'single', { allowTemplateLiterals: true }],
        "semi": ["error","never"],
        'brace-style': ['error', '1tbs'],
		'no-multi-spaces': 'warn',
		'require-atomic-updates': 'error',
		'no-trailing-spaces': 'error',
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 1 }],
		'comma-dangle': ['error', 'always-multiline'],
		'object-curly-spacing': ['warn', 'always'],
		'no-console': 'off',
		'indent': ['error', 'tab'],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		semi: ['error', 'never'],
		'space-in-parens': ['warn', 'never'],
		camelcase: ['warn'],
		'no-whitespace-before-property': 2,
		'arrow-spacing': 'error',
    }
};