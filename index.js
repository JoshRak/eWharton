var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
fs = require('fs');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('docs'));

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.listen(5000);