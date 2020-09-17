const http = require('http');
const fs = require('fs');
const { resolve } = require('path');

const server = http.createServer(function(req, res) {
    res.writeHeader(200, { 'Content-Type': 'text/html;charset=utf-8' });
    let data = fs.readFileSync(resolve(__dirname, './a.html'));
    res.end(data);
});

server.listen(8000, '127.0.0.1');
console.log('http://127.0.0.1:8000');