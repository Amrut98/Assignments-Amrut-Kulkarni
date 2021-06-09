var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Express Assignments/public/index.html');
});

app.listen(3000);
console.log('Server started at port 3000');