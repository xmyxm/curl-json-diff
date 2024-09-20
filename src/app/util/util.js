/* eslint-disable @typescript-eslint/explicit-function-return-type */

function getTimeText(timeTramp) {
	return timeTramp < 10 ? String(`0${timeTramp}`) : String(timeTramp)
}

function getTime() {
	const date = new Date()
	const year = getTimeText(date.getFullYear())
	const month = getTimeText(date.getMonth() + 1)
	const day = getTimeText(date.getDate())
	const hours = getTimeText(date.getHours())
	const minutes = getTimeText(date.getMinutes())
	const seconds = getTimeText(date.getSeconds())
	const milliseconds = getTimeText(date.getMilliseconds())
	return `${year}${month}${day}:${hours}:${minutes}:${seconds}:${milliseconds}`
}

module.exports = getTime
