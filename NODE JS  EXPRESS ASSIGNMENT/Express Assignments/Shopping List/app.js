const express = require('express');
const app = express();
const bodyParser = require("body-parser");


var items = [{
        id: 1,
        name: 'Pen',
        price: 20
    },
    {
        id: 2,
        name: 'Notebook',
        price: 40
    },
    {
        id: 3,
        name: 'Book',
        price: 200
    },
    {
        id: 4,
        name: 'Pencil',
        price: 5
    },
    {
        id: 5,
        name: 'Eraser',
        price: 10
    },
];

app.get('/items', (req, res) => {
    res.send(items);
});

app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.send(item);
    } else {
        res.send({ message: `Item ${itemId} doesn't exist` });
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/items', (req, res) => {
    items.push(req.body);
    res.send("Item added successfully");
});



console.log('Server is running at 3000');
app.listen(3000);