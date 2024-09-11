import { createServer } from 'http';


createServer(function(req, res)  {
    res.write('Web Server');
    res.end();
}).listen(3000);