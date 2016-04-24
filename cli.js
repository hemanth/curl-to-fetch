#!/usr/bin/env node
'use strict'
let pkg = require('./package.json')
let toFetch = require('./index')
let input = process.argv[2]

const helpString =
`${pkg.description}
Usage
  $ cat <file_with_curl> | c2f
  $ c2f <curl_command>
  
Options
  -v, --version	Print version
  -h, --help	Display help message`

function printHelp() {
	console.log(helpString)
	process.exit(0)
}

function printVersion() {
	console.log(pkg.version)
	process.exit(0)
}

function printError() {
	console.error('Couldn\'t generate the fetch code')
	process.exit(-1)
}

function init(data) {
	let res = toFetch(data)

	if (res)
		console.log(res)
	else
		printError()
}

process.argv.map(arg => {
	switch (arg) {
		case '-h':
		case '--help':
			printHelp()
			break
		case '-v':
		case '--version':
			printVersion()
	}
})

if (process.stdin.isTTY)
	if (!input)
		printHelp()
	else
		init(input)
else
	process.stdin.once('data', data => init(data))
