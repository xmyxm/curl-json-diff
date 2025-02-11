const useIP = false
const useNewUrl = true

function getRC(url, header = {}) {
    let rcURL = useIP ? '' : url

    if (useIP) {
        const pathIpList = [
            { regex: /\/wxmapi\/shop\//, ip: '10.80.216.98' },
            { regex: /\/wxmapi\/follow\//, ip: '10.100.38.53' }
        ]

        pathIpList.forEach(({ regex, ip }) => {
            if (regex.test(url)) {
                rcURL = url.replace('https', 'http').replace('m.dianping.com', `${ip}:8080`)
            }
        })
    }

    const headerObj = Object.assign({}, header, { 'pragma-env': 'rc' })
    if (headerObj['swimlane']) {
        delete headerObj['swimlane']
    }

    if (useNewUrl) {
        rcURL = url.replace('/mapi/base/unify/shop.bin', '/mapi/wechat/weshop.bin')
        // rcURL = 'http://10.73.169.165:8080/mapi/wechat/weshop.bin'
        // if (headerObj['mtgsig']) {
        //     delete headerObj['mtgsig']
        // }
    }

    return {
        rcURL,
        rcHeader: headerObj
    }
}

module.exports = getRC