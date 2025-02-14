const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let tasks = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = { id: Date.now(), text: req.body.text };
    tasks.push(newTask);
    res.json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
