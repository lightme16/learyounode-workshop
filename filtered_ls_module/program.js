var filter_func = require('./filtered_ls');

filter_func(process.argv[2], process.argv[3], function (err, data) {
    if (err)
        console.error(err);
    else
        console.log(data);
});
