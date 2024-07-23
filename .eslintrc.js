// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ['expo', 'eslint:recommended', 'plugin:react-hooks/recommended'],
	rules: {
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-undef': 'off',
	},
};
