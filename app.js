var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.compress());

app.get('/', function (req, res) {
	res.send('Hello World!\n');
});

app.get('/about', function(req, res){
	res.send('Here is a little about me');
});	

app.get('/test', function(req, res){
	res.send('Test passed, A+!');
});

app.get('/name/:myname', function(req, res) {
	res.send('My name is ' + req.params.myname);
});

app.listen(8000);