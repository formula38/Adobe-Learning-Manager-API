const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {text: "World!"});
});

app.get('/users', (req, res) => {
    res.send('User List');
});

app.get('/users/new', (req, res) => {
    res.send('User New form');
});

app.listen(port, () => {
    console.log(`Starting ALM API Server on http://localhost:${port}`);
});
