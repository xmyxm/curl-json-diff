module.exports = {
	// 排版宽度即每行最大宽度。默认值是 80
	printWidth: 120,
	// 代码结尾分号
	semi: false,
	// 使用带引号替代双引号
	singleQuote: true,
	// 为多行数组的非末尾行添加逗号
	trailingComma: 'all',
	// 在对象字面量和括号之间添加空格
	bracketSpacing: true,
	// 箭头函数圆括号，"avoid" - 在可以消除的情况下，消除括号；"always" - 一直保留括号
	arrowParens: 'avoid',
	// Prettier 支持在一个文件的头部设置约束，仅格式化那些包含「特殊注释」的文件，这种约束称为「 pragma 编译附注」，/** @format */
	insertPragma: false,
	// 制表符宽度，每个层级缩进几个空格。默认值 2
	tabWidth: 4,
	// 是否使用 tab 代替 space(空格) 为单位缩进，默认 false
	useTabs: true,
};
