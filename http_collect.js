var http = require('http');

var content = '';

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        content += data;
    });
    response.on('end', function () {
        var numChar = content.split('').length;
        console.log(numChar + '\n' + content);
    });
});
