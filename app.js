const { response, raw } = require('express');
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const { request } = require('http');
const app = express(); 

app.use(cors());
app.use(express.static(__dirname));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/Pagina.html');
});

app.get('/join', (request, response) => {
    response.sendFile(__dirname + '/Formular.html');
});

app.get("*", (request, response) =>
{
    response.sendFile(__dirname + '/404.html');
})

app.listen(8000, () => {
    console.log('server is running on port 8000');
  });
  