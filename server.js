var express = require('express');
var app = express();

app.use("/static", express.static(__dirname + 'public'));

app.get("/", function (req, res) {
  res.sendfile('src/index.html');
});

var port = process.env.npm_package_config_port || "1337";
app.listen(port, function() {
  console.log('App listening on port :' + port);
});
