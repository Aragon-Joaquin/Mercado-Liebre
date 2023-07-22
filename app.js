const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const puerto = 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

//HOME & SUBDOMAINS

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html') );
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html') );
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('views/register.html') );
})

// LISTEN ON PORT

app.listen(puerto, () => {
    console.log(`Aplicación esuchando en http://localhost:${puerto}`);
});
