var parseCurl = require('parse-curl')

module.exports = function (curl) {

    if (typeof curl !== 'string') 
        throw new TypeError(`Expected String, Found ${typeof curl}`)

    var parsed = parseCurl(curl)

    return `
      fetch( 
            '${parsed.url}', 
            {headers:${JSON.stringify(parsed.header)},
            method:'${parsed.method}'}
           )
           .then(console.log, console.error)`
}
