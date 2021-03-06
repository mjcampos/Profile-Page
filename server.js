var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());

var port = 8000;

app.listen(port, function() {
	console.log("Michael Campos' profile page is active on port " + port);
});