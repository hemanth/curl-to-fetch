
# curl-to-fetch

Parse curl commands and returns `fetch` API equivalent.

## Example

Input:

```
curl --cookie 'species=sloth;type=galactic' slothy https://api.sloths.com
```

Output:

```js
fetch( 
      'https://api.sloths.com', 
      {headers:{"Set-Cookie":"species=sloth;type=galactic"},
      method:'GET'}
     )
     .then(console.log, console.error)
```

P.S: Supports all the `curl` flags that [parse-curl.js](https://www.npmjs.org/parse-curl/) has.

##CLI

```sh
$ c2f "curl --cookie 'species=sloth;type=galactic' slothy https://api.sloths.com"
```

```sh
      fetch( 
            https://api.sloths.com, 
            {headers:{"Set-Cookie":"species=sloth;type=galactic"},
            method:'GET'}
           )
           .then(console.log, console.error)
```

#API

```js

const parse = require('curl-to-fetch');

const fetchCode = parse(`curl 'http://google.com/'`);

console.log(fetchCode);

```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> [h3manth.com](https://h3manth.com) &nbsp;&middot;&nbsp;
> GitHub [@hemanth](https://github.com/hemanth) &nbsp;&middot;&nbsp;
> Twitter [@gnumanth](https://twitter.com/gnumanth)
