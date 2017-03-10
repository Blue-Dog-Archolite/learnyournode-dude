'use strict';

const BufferList = require('bl');
const hyperquest = require('hyperquest')
const http = require('http');

let url = process.argv[2];

var result = "";
// http.get(url, function (resp) {
//     var body = [];

//     resp.setEncoding('utf8');
//     resp.on('data', console.log);
// }).on('error', function (err) {
//     console.log(err.message);
// }).on('data', function (data) {
//     consloe.log('data', data);
// });


var bl = new BufferList();
// let url = 'https://raw.github.com/rvagg/bl/master/README.md'

hyperquest(url).pipe(BufferList(function (err, data) {
    result = result + " " + data.toString();
}));

console.log(result);
