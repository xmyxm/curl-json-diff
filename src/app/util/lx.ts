let pageCase

export const lxPV = function (cid, valLab) {
	const tracker = (window as any).LXAnalytics('getTracker', 'dianping_nova')
	tracker('set', 'appnm', 'dp_m')
	pageCase = tracker('pageView', valLab, null, cid)
}

export const lxMV = function (valBid, valLab) {
	if (pageCase) {
		pageCase('moduleView', valBid, valLab, null)
	} else {
		console.error('MV上报失败，请先上报PV后再上报MV')
	}
}

export const lxMC = function (valBid, valLab) {
	if (pageCase) {
		pageCase('moduleClick', valBid, valLab, null)
	} else {
		console.error('MC上报失败，请先上报PV后再上报MC')
	}
}
