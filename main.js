var app = require("express")(),
    beep = require("./lib/beep.js"),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post("/beep", function (req, res) {
  beep(req.body.beep);

  res.status(204).send();
});

var server = app.listen(process.env["PORT"], function () {
  var host = server.address().address,
      port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
