var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    var date = new Date();
    res.render('main', { date: date.toDateString() });
})

app.listen(3000);