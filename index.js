var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
fs = require('fs');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('docs'));

app.get('/', function(req, res) {
    res.send("index.html");
});

app.get('/index', function(req, res) {
    res.send("index.html");
});

app.get('/tour', function(req, res) {
    res.send("tour.html");
});

app.get('/features', function(req, res) {
    res.send("features.html");
});


app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});