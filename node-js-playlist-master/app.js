var http = require('http'),
    fs = require('fs')
    express = require('express');

var server = http.createServer(function(req, res){
  console.log('The server started'+req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('End of the request');
});

server.listen(3000, '127.0.0.1');
console.log("Welcome to my first node app");
