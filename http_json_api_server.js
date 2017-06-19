var http = require('http');
var url = require('url');

var date = new Date();

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (!req.url)
        res.end('You must provide URL in order to use API');

    var parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/api/parsetime') {
        date = new Date(parsedUrl.query.iso);
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }));
    }
    else if (parsedUrl.pathname === '/api/unixtime') {
        res.end(JSON.stringify({
            "unixtime": date.getTime()
        }));
    }
}).listen(Number(process.argv[2]));