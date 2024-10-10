function getRC(url, header = {}) {
    const pathIpList = [
        { regex: /\/wxmapi\/shop\//, ip: '10.80.216.98' },
        { regex: /\/wxmapi\/follow\//, ip: '10.100.38.53' }
    ]

    let rcURL = ''
    pathIpList.forEach(({ regex, ip }) => {
        if (regex.test(url)) {
            rcURL = url.replace('https', 'http').replace('m.dianping.com', `${ip}:8080`)
        }
    })

    const headerObj = Object.assign({}, header, { 'pragma-env': 'rc' })
    if (headerObj['swimlane']) {
        delete headerObj['swimlane']
    }
    return {
        rcURL,
        rcHeader: headerObj
    }
}

module.exports = getRC