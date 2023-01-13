'use strict';
var http = require('http');
const PORT = 3000;

const server = app.listen(PORT, () =>
	console.log(`Server started on port http://localhost:${PORT}`)
);
server.on("error", (err) => console.log(err));

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(PORT);

