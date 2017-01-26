'use strict';
var fs = require('fs');

module.exports = function (directoryPath, filterPatern, callback) {
    var extensionRegex = RegExp('\.' + filterPatern);

    return fs.readdir(directoryPath, function ( err, fileList ) {
        if (err) { return callback(err); }

        var matchedFiles = fileList.filter(function(item){
            // console.log('item', item);
            return item.match(extensionRegex);
        });

        // console.log('matchedFiles', matchedFiles);
        return callback(null, matchedFiles);
    });
};
