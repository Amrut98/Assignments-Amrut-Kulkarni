//2.Tell the year you were born.

var express = require('express');
var app = express();

app.get('/year', (req, res) => {
    var age = req.query.age;
    var date = new Date();
    var year = date.getFullYear() - age;
    res.send('Birth year is' + year);
})

app.listen(3000);