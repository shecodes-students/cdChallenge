var http = require('http');
var fs = require('fs');
//var convert = require ('./script');
http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(res);
    } else {
        res.writeHead(404);
        res.end('ups');
    }
}).listen(3000);
