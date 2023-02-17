const fs = require('fs');

const path = __dirname + '/10mb-sample.json';

const readData = () => {
    const rawData = fs.readFileSync(path, { encoding: 'utf8' });
    
    return JSON.parse(rawData)
}

module.exports = readData;