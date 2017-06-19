var fs = require('fs');
var result = '';

fs.readFile(process.argv[2], function callback(err, data) {
    result = data.toString().split('\n').length - 1;
    console.log(result);
});
