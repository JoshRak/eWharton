var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
fs = require('fs');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('docs'));

app.get('/', function(req, res) {
    res.send("assets/index.html");
});

app.get('/index', function(req, res) {
    res.send(path.join(__dirname + "index.html"));
});

app.get('/tour', function(req, res) {
    res.send(path.join(__dirname + "tour.html"));
});

app.get('/features', function(req, res) {
    res.send(path.join(__dirname + "features.html"));
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});