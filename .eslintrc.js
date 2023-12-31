module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'jest': true
	},
	'extends': [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'plugins': [ '@typescript-eslint' ],
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'settings': {
		'import/parsers': {
			'@typescript-eslint/parser': [ '.ts', '.tsx' ]
		},
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true,
				'project': './tsconfig.json'
			}
		}
	},
	'overrides': [
		{
			'files': [ 'src/*.ts' ],
			'parserOptions': {
				'project': './tsconfig.json'
			},
			'excludedFiles': '*.js',
			'extends': [
				'plugin:@typescript-eslint/recommended-requiring-type-checking'
			]
		}
	],
	'ignorePatterns': [ 'dist/**/*' ],
	'rules': {
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [ 'error' ],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [ 'error' ],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'js': 'never',
				'jsx': 'never',
				'ts': 'never',
				'tsx': 'never'
			}
		],
		'no-tabs': 'off',
		'indent': [
			'error',
			'tab'
		],
		'comma-dangle': [
			'error',
			'never'
		],
		'import/prefer-default-export': 'off',
		'space-in-parens': [
			'error',
			'always'
		],
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'no-underscore-dangle': [
			'error',
			{
				'allowAfterThis': true
			}
		],
		'computed-property-spacing': [
			'error',
			'always'
		],
		'quote-props': [
			'error',
			'consistent'
		],
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': [
			'error',
			{
				'devDependencies': true
			}
		],
		'prefer-const': 'off',
		'no-param-reassign': 'off',
		'import/no-named-as-default': 'off',
		'function-paren-newline': 'off',
		'no-restricted-imports': [
			'error',
			{
				'patterns': [ '@material-ui/*/*/*', '!@material-ui/core/test-utils/*' ]
			}
		],
		'arrow-parens': [
			2,
			'as-needed',
			{ 'requireForBlockBody': true }
		],
		'lines-between-class-members': [
			'error',
			'always',
			{ 'exceptAfterSingleLine': true }
		]
	}
};
