const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/todo', (req, res) => {
    const todoPath = path.join(__dirname, 'todo.json');
    fs.readFile("todo.json", 'utf8', (err, data) => {
        if (err) {
            return res.send(err);
        }
        let todos = JSON.parse(data);
        console.log(todos);
        res.json(todos);
    });
});

app.listen(5555, () => {
    console.log('server started');
});