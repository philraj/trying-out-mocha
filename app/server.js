var express = require('express');
var app = express();
var converter = require('./converter');

app.get('/rgbToHex', (req, res) => {
  console.log('request received...', req.query)

  var red = parseInt(req.query.red);
  var green = parseInt(req.query.green);
  var blue = parseInt(req.query.blue);

  var hex = converter.rgbToHex(red, green, blue);

  res.status(200).send(hex);
})

app.get('/hexToRGB', (req, res) => {
  console.log('request received...', req.query)

  var rgb = converter.hexToRGB(req.query.hex);

  res.status(200).send(JSON.stringify(rgb));
})

app.listen(3000);
