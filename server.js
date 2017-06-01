var express = require('express')
var app = express()

app.get('/', function (req, res) {
  // get ip adress
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(req.headers);
  console.log(ip);
})


app.listen(3000, function () {
  console.log('Test stand is listening on port 3000!')
})
