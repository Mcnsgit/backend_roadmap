import http from 'http';
// import url from 'url';

// http.createServer(function(req, res)  {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const q = url.parse(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(3001);var http = require('http');
import { parse } from 'url';

import { readFile } from 'fs';

http.createServer(function (req, res) {
  var q = parse(req.url, true);
  var filename = "." + q.pathname;
  readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);