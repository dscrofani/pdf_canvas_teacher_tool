var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); //That's a double underscore

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function() {
  console.log('Great! The server is running and waiting for traffic on port 3000.')
});
