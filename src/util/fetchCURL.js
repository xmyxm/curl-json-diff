const axios = require('axios')

function fetchCURL(method, url, headers, body) {
	// 使用 axios 发出请求
	return axios({
		method: (method || 'get').toLocaleLowerCase(), // 默认为 GET 请求
		url: url,
		headers: headers,
		data: body,
	})
		.then(response => {
			// 输出响应数据
			return response.data
		})
		.catch(error => {
			console.error(`请求${url}失败:`, error)
		})
}

module.exports = fetchCURL
