'use strict';

var http = require('http');
var url = process.argv[2];

http.get(url, function (resp) {
    var body = [];

    resp.setEncoding('utf8');
    resp.on('data', console.log);
}).on('error', function (err) {
    console.log(err.message);
}).on('data', function (data) {
    consloe.log('data', data);
});
