'use strict';

var filter = require('./module');

var directoryPath = process.argv[2];
var filterPatern = process.argv[3];

filter(directoryPath, filterPatern, function ( err, list){

    // console.log('what', directoryPath);
    // console.log('other', filterPatern);

    if (err) {
        return console.error(err);
    }

    // console.log('list is', list);

    list.forEach(function(file){
        console.log(file);
    });
});

