const fs = require('fs')
const path = require('path')
const getTime = require('./util/util')
const printLog = require('./util/printLog')
const curlParser = require('curl-parser-js')
const fetchCURL = require('./util/fetchCURL')
const clearDirectory = require('./util/clearDirectory')
const readFileInfoList = require('./util/readFileInfoList')

// 指定目录路径
const directoryPath = path.join(__dirname, '../webfile')
const fileInfoList = readFileInfoList(directoryPath)
const promiseList = []
fileInfoList.forEach(item => {
	const { content } = item
	const parsedObject = curlParser.parse(content)
	// 从解析对象中获取 URL 和请求头部
	const { url, method, headers, body } = parsedObject
	item.url = url
	promiseList.push(
		fetchCURL(method, url, headers, body).then(data => {
			item.responseRC = JSON.stringify(data)
		}),
	)
	if (headers['pragma-env']) {
		delete headers['pragma-env']
	}
	promiseList.push(
		fetchCURL(method, url, headers, body).then(data => {
			item.responsePRO = JSON.stringify(data)
		}),
	)
})

Promise.all(promiseList).then(() => {
	const scanPath = path.join(__dirname, '../scandata')
	// 同步清空文件夹
	clearDirectory(scanPath)
	let passAPI = 0
	let noPassAPI = 0
	fileInfoList.forEach(({ url, curlName, responsePRO, responseRC }) => {
		if (responsePRO !== responseRC) {
			printLog.warn(`${getTime()} ${url} 请求PRO与RC环境返回数据不一致`)
			const contents = [url, 'PRO:', responsePRO, 'RC:', responseRC]
			const filePath = path.join(scanPath, curlName)
			fs.writeFileSync(filePath, '') // 创建一个空文件
			contents.forEach(content => {
				fs.appendFileSync(filePath, content + '\n') // 换行写入每段内容
			})
			noPassAPI += 1
		} else {
			// printLog.info(`${getTime()} ${url} 请求测试通过`)
			passAPI += 1
		}
	})
	printLog.info(`本次测试共 ${fileInfoList.length} 个API`)
	if (passAPI) {
		printLog.info(`本次测试通过 ${passAPI} 个API`)
	}
	if (noPassAPI) {
		printLog.error(`本次测试未通过 ${noPassAPI} 个API`)
	}
})
