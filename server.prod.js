var express = require('express');
var app = express();
var compression = require('compression');
app.use(compression());
var options = {maxAge: '1y'};
app.use('/build', express.static('build', options));
app.use('/dist', express.static('dist', options));
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
