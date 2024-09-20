export const secret = '2022'

export function getUrlParam(name: string): string {
	const query = window.location.search.substring(1)
	const vars = query.split('&')
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=')
		if (pair[0] === name) {
			return decodeURIComponent(pair[1])
		}
	}
	return ''
}

function getNumText(num: number): string {
	return num > 9 ? `${num}` : `0${num}`
}

export function getDateNowText(): string {
	const date = new Date()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const seconds = date.getSeconds()
	return `${getNumText(hour)}:${getNumText(minute)}:${getNumText(seconds)}`
}

export function getDateText(num: number): string {
	const date = new Date(num)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const seconds = date.getSeconds()
	return `${year}/${getNumText(month)}/${getNumText(day)} ${getNumText(hour)}:${getNumText(minute)}:${getNumText(
		seconds,
	)}`
}

export function copyToClipboard(text: string) {
	const isSafari = navigator.userAgent.match(/iPad|iPhone|iPod|Macintosh/i)
	return new Promise(resolve => {
		// iOS 才用现代的方法复制，因为微信小程序安卓 webview 上用这个方法会报错
		if (navigator.clipboard && isSafari) {
			navigator.clipboard
				.writeText(text)
				.then(() => {
					resolve(true)
				})
				.catch(() => {
					resolve(false)
				})
		} else {
			const ele = document.createElement('input') // 创建一个input标签
			ele.setAttribute('value', text) // 设置改input的value值
			document.body.appendChild(ele) // 将input添加到body
			ele.select() // 获取input的文本内容
			document.execCommand('copy') // 执行copy指令
			document.body.removeChild(ele) // 删除input标签
			resolve(true)
		}
	})
}

export default {
	getUrlParam,
	getDateText,
	getDateNowText,
	copyToClipboard,
}
