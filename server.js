var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');  

app.use(express.static(__dirname + '/build'));
app.use('/src/scripts', express.static(__dirname + '/build/scripts'));
app.use('/style', express.static(__dirname + '/build/styles'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
  //res.sendFile('index.html');
});

var port = process.env.PORT || 3500;
app.listen(port, function() {
  console.log('App listening on port :' + port);
});
