const assert = require('assert')
const parse = require('./index')

const cases = []

cases.push({
    input: "curl --cookie 'species=sloth;type=galactic' slothy https://api.sloths.com",
    output: `
      fetch( 
            'https://api.sloths.com', 
            {headers:{"Set-Cookie":"species=sloth;type=galactic"},
            method:'GET'}
           )
           .then(console.log, console.error)`
})

cases.forEach(function (c) {
    const out = parse(c.input)

    const msg = `
       input: ${c.input}
    expected: ${JSON.stringify(c.output)}
    received: ${JSON.stringify(out)}
    `
    assert.deepEqual(out, c.output, msg)
})

console.log('\n  :)\n')