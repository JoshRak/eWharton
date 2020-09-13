var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
fs = require('fs');
var app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('docs'));

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});