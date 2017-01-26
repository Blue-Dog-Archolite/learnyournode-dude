'use strict';

var fs = require('fs');

var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);

var lines = buffer.toString().split('\n').length;

console.log(lines - 1);
