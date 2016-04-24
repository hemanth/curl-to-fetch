#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var toFetch = require('./index');
var input = process.argv[2];

function help() {
	console.log(pkg.description);
	console.log('');
	console.log('Usage');
	console.log('  $ cat <file_with_curl> | c2f');
	console.log('  $ c2f <curl_command>');
	console.log('');
}

function init(data) {
	var res = toFetch(data);

	if (res) {
		console.log(res);
	} else {
		console.error('Couldn\'t gen the fetch code');
		process.exit(-1);
	}
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}
	init(input);
} else {
	process.stdin.once('data', function (data) {
		init(data);
	});
}