module.exports = {
	// 此项是用来告诉eslint找当前配置文件不能往父级查找
	root: true,
	// 脚本运行环境
	env: {
		browser: false,
		node: true, // webpack所以需要node一些环境变量
		es6: true,
	},
	// 额外的全局变量
	globals: {
		fetch: true,
	},
	// extends 属性的优先级较低,如果在 rules 属性中定义了相同的规则,则会覆盖 extends 中继承的规则。另外,extends 中的配置源会按照数组顺序由左到右的优先级合并配置
	extends: [
		'airbnb-base',
		'eslint:recommended', // 这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
		'plugin:react/recommended',
		'prettier', // 使用 eslint-config-prettier 将所有与 Prettier 冲突的 ESLint 规则禁用掉。这样,Prettier 就可以完全控制代码格式化的样式,而不会与 ESLint 产生冲突
		'plugin:prettier/recommended', // 表示使用 eslint-plugin-prettier 插件提供的推荐规则集
	],
	// ESLint 默认使用Espree作为其解析器，@typescript-eslint/parser作为ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
	// parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2019, // 指定你想要使用的 ECMAScript 版本 (2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）)
		sourceType: 'module', // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
		ecmaFeatures: {
			// 表示你想使用的额外的语言特性
			jsx: false, // 注意，对 JSX 语法的支持不用于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，我们推荐你使用 eslint-plugin-react
			experimentalObjectRestSpread: true, // 启用实验性的 object rest/spread properties 支持
		},
	},
	// 通常输出规则。一些插件也可以输出一个或多个命名的配置。ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。插件名称可以省略 eslint-plugin- 前缀
	plugins: [
		'prettier', // 启用 eslint-plugin-prettier 插件，,它将 Prettier 作为一个 ESLint 规则来运行，它并不会禁用任何 ESLint 规则,而是在代码格式化方面使用 Prettier 的规则。
		'react',
		'html',
		'markdown', // eslint-plugin-markdown 可以检查 Markdown、 HTML以及其它语言文件中的代码
	],
	overrides: [
		{
			files: ['*.md'],
			processor: 'markdown/markdown',
		},
	],
	// 开启规则和发生错误时报告的等级
	rules: {
		'react/react-in-jsx-scope': 'off',
		'no-use-before-define': 'off',
		'no-plusplus': 'off',
		'no-alert': 'off',
		'class-methods-use-this': 'off',
		'no-restricted-globals': 'off',
		'no-console': 'off',
		'no-underscore-dangle': 'off', // 不能使用下划线
		'object-curly-newline': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-multi-assign': 'off', // 链接变量的赋值可能会导致意外的结果并难以阅读 https://cloud.tencent.com/developer/section/1135717
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'prettier/prettier': ['error'], // 配置 eslint-plugin-prettier 规则，这意味着任何不符合 Prettier 风格的代码都会被标记为错误
		semi: ['error', 'never'],
	},
	settings: {
		// 自动发现React的版本，从而进行规范react代码
		// react: {
		// 	pragma: 'React',
		// 	version: 'detect',
		// },
	},
}
