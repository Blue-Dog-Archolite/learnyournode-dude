'use strict';

var argList = process.argv;

argList.shift();
argList.shift();

var sum = argList.reduce( function (a, b) {
    return Number(a) + Number(b);
});

console.log(sum);
