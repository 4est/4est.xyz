import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';


const port = process.env.npm_package_config_port || 3000;
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});