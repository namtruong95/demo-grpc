const http = require("http");
const readJson = require('../read-json')

const host = '127.0.0.1';
const port = 8000;

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = readJson();
    res.end(JSON.stringify(data));
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});