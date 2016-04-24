
const assert = require('assert');
const parse = require('./index');

const cases = [];

cases.push({
    input: "curl --cookie 'species=sloth;type=galactic' slothy https://api.sloths.com",
    output: "\n      fetch( \n            https://api.sloths.com, \n            {headers:{\"Set-Cookie\":\"species=sloth;type=galactic\"},\n            method:'GET'}\n           )\n           .then(console.log, console.error)"
});

cases.forEach(function (c) {
    const out = parse(c.input);

    const msg = `
       input: ${c.input}
    expected: ${JSON.stringify(c.output)}
    received: ${JSON.stringify(out)}
    `;

    assert.deepEqual(out, c.output, msg);
});

console.log('\n  :)\n');
