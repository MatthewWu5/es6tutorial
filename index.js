var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8082;

http.listen(port, function () {
    console.log('listening on *:' + port);
});

app.get('/*', function (req, res) {
    res.sendFile(__dirname + req.url)
});