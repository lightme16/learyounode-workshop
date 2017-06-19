var http = require('http');
var map = require('through2-map');

http.createServer(function (req, res) {
    if (req.method !== 'POST')
        res.end('You should send POST data!');
    req.pipe(map(function (chunk) {
        return chunk.toString().toLocaleUpperCase();
    })).pipe(res);

}).listen(Number(process.argv[2]));