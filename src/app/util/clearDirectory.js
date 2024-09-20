const fs = require('fs')
const path = require('path')

// 同步清空文件夹
function clearDirectory(directoryPath) {
	// 执行清空文件夹操作
	try {
		// 读取文件夹内容
		const files = fs.readdirSync(directoryPath)

		files.forEach(file => {
			const filePath = path.join(directoryPath, file)
			const stat = fs.statSync(filePath)

			if (stat.isDirectory()) {
				// 如果是子目录，递归清空
				clearDirectory(filePath)
				// 删除空的子目录
				fs.rmdirSync(filePath)
			} else {
				// 如果是文件，删除文件
				fs.unlinkSync(filePath)
			}
		})
		console.log(`文件夹 ${directoryPath} 已被清空`)
	} catch (err) {
		console.error(`清空文件夹失败: ${err}`)
	}
}

module.exports = clearDirectory
