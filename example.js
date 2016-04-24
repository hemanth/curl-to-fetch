
const parse = require('./index')

const fetchCode = parse(`curl 'http://google.com/'`)

console.log(fetchCode)
