var express = require("express"),
    clientConfig = require("./config.json").client,
    keenioMiddleware = require('../');

var app = express();

keenioMiddleware.configure({
  client: clientConfig
});
app.use(express.json());
app.use(express.urlencoded());
app.use(express.multipart());
app.use(keenioMiddleware);

app.get('/test', function (req, res) {
  res.json({
    special: 'hey',
    abc: 4
  });
});

app.listen(3000);
