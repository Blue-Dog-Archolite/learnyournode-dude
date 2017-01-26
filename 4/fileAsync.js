'use strict';

var fs = require('fs');

var loadFile = process.argv[2];

fs.readFile(loadFile, function (err, data) {
    if (err) {
        throw err;
    }

    console.log(getEndOfLineCount(data));
});


function getEndOfLineCount(content){
    var lineCount = content.toString().split('\n');
    return (lineCount.length - 1);
};
