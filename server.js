var http = require('http');
var nodeStatic = require('node-static');
var file = nodeStatic.Server('./cdChallenge', {cache: 3600});
var fs = require('fs');
console.log(file);
//var convert = require ('./script');
http.createServer(function(req, res) {
    req.addListener('end', function() {
        file.serve(req, res, function(err, result) {
            if (err) {
                console.log('error'+ req.url+ err.message);
            } else {
                console.log('%s - %s'+ req.url+ res.message);
            }
        });
    }).resume();
}).listen(3000);
