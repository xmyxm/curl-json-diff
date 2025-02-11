const useIP = true

function getRC(url, header = {}) {
    let rcURL = ''

    if (useIP) {
        const pathIpList = [
            { regex: /\/wxmapi\/shop\//, ip: '10.80.216.98' },
            { regex: /\/wxmapi\/follow\//, ip: '10.100.38.53' },
            { regex: /\/wxmapi\/tuan\//, ip: '10.100.38.53' },
            { regex: /\/ugc\/shop\//, ip: '10.53.133.177' }
        ]

        pathIpList.forEach(({ regex, ip }) => {
            if (regex.test(url)) {
                rcURL = url.replace(/^(https?):\/\/[^\/]+/, `http://${ip}:8080`)
            }
        })
    }

    if (!rcURL) {
        rcURL = url
    }

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