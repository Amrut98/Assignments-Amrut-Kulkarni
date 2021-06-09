//2.Write a program that read a file in local machine and shows in the console the content of it.

var fs = require('fs');

fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});