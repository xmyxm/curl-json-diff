const fs = require('fs')
const path = require('path')

// 递归读取目录下的所有文件
function readFileInfoList(directoryPath) {
	let fileContentInfoList = []
	try {
		// 同步读取目录下的所有文件和子目录
		const files = fs.readdirSync(directoryPath)
		files.forEach(file => {
			const filePath = path.join(directoryPath, file)
			try {
				// 同步获取文件或目录的状态信息
				const stats = fs.statSync(filePath)
				if (stats.isDirectory()) {
					// 如果是目录，则递归读取
					fileContentInfoList = fileContentInfoList.concat(readFilesRecursively(filePath))
				} else {
					// 如果是文件，则输出文件名
					const content = fs.readFileSync(filePath, 'utf8')
					fileContentInfoList.push({
						curlName: file,
						curlPath: filePath,
						content,
					})
				}
			} catch (err) {
				console.error('无法获取文件或目录的状态信息: ' + err)
			}
		})
	} catch (err) {
		console.error('无法读取目录: ' + err)
	}

	return fileContentInfoList
}

module.exports = readFileInfoList
