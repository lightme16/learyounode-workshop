var fs = require('fs');
var path = require('path');

module.exports = filter_ls;

function filter_ls(folder, ext, callback) {
    fs.readdir(folder, function (err, data) {
        if (err)
            return callback(err)
        data.forEach(function (element) {
            if (path.extname(element) === '.' + ext)
                callback(null, element);
        });
    });
};


