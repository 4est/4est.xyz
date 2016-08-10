var express = require('express');
var app = express();

app.use('/src/scripts', express.static(_dirname + '/dist/js');
app.use('/style', express.static(__dirname + '/dist/css'));

app.get("/", function (req, res) {
  res.render('index');
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log('App listening on port :' + port);
});