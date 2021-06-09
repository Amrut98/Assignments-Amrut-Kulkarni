var express = require('express');
var app = express();


var port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/time', (req, res) => {
    var date = new Date();
    res.send(date);
})


app.listen(port);