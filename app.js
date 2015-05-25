var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 3000;

var hellobot = require('./hellobot');
var baklava = require('./baklava');
var docDocker = require('./docDocker');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });
 
app.post('/hello', hellobot);
app.get('/baklava', baklava);
app.post('/docDocker', docDocker);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});
 
app.listen(port, function () {
  console.log('Slack bot listening on port ' + port);
});
