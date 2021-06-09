//3.Hello World when port is given by user.

var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/', (req, res) => {
    res.send("Hello World!");

})
console.log('Server started at ' + port);
app.listen(port);