var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    var contents;
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        contents = fs.readFileSync('./index.html', 'UTF-8');
        res.end(contents);
        console.log('html');
    }
    if (req.url === '/script.js') {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        contents = fs.readFileSync('./script.js', 'UTF-8');
        res.end(contents);
        console.log('js');
    } else {
        res.writeHead(404);
        res.end('oops');
    }
}).listen(3000);
