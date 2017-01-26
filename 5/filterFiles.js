'use strict';

var fs = require('fs');

var directoryPath = process.argv[2];
var filterPatern = process.argv[3];

fs.readdir(directoryPath, function ( err, fileList ) {
    if (err) { throw err; }

    var filteredList = fileList.filter(filterByExtension);
    filteredList.forEach(function (file) {
        console.log(file);
    });
});


function filterByExtension(fileName){
    var extensionRegex = RegExp('\.' + filterPatern);
    return fileName.match(extensionRegex)
};
