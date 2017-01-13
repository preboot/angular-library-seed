var fs = require('fs');
fs.createReadStream('package' + process.argv[2] + '.json').pipe(fs.createWriteStream('package.json'));
