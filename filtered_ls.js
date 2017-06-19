var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = process.argv[3];

fs.readdir(folder, function callback(err, list) {
    if (err) return console.error(err);
    list.forEach(function fun(element) {
        if (path.extname(element) === '.' + ext)
            console.log(element);
    });
});
