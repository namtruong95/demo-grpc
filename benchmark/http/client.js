const http = require('http');

console.time('benchmark');

const request = http.request({
    host: '127.0.0.1',
    port: 8000,
    method: 'GET',
}, (res) => {
    let byteData = []

    res.on('data', (chunk) => {
        byteData.push(chunk)
    })

    res.on('end', () => {
        const data = JSON.parse(Buffer.concat(byteData).toString());

        console.log('Data: ', data);
        console.timeEnd('benchmark');
    })
});

request.end()
