var parseCurl = require('parse-curl');

module.exports = function (curl) {

    if (typeof curl !== 'string') {
        throw new Error('Expected a string');
    }

    var parsed = parseCurl(curl);

    return `
      fetch( 
            '${parsed.url}', 
            {headers:${JSON.stringify(parsed.header)},
            method:'${parsed.method}'}
           )
           .then(console.log, console.error)`;
};
