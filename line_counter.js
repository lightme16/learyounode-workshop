var fs = require('fs');
var result = '';
if (process.argv[2] !== undefined) {
    var file = fs.readFileSync(process.argv[2]).toString();
    result = file.split('\n').length - 1;
}
console.log(result);
