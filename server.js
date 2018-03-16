var express = require('express');
var app = express();

app.use('/src', express.static(_dirname + '/dist/js'));
app.use('/', express.static(__dirname + '/dist/css'));

app.get("/", function (req, res) {
  res.render('index');
});

var port = process.env.npm_package_config_port;
app.listen(port, function() {
  console.log('App listening on port :' + port);
});
