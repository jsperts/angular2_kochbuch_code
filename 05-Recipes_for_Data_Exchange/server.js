var http = require('http');

var HOST = '127.0.0.1';
var PORT = 3000;

var getId = (function() {
  var counter = 0;
  return function() {
    return counter++;
  }
})();

var data = [{id: getId(), name: 'bla'}, {id: getId(), name: 'blup'}];

function respondWithError(resp) {
  resp.writeHead(500, 'Internal Error');
  resp.end();
}

function handleRequest(req, resp) {
  console.log(req.method, req.url);

  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.url === '/data') {
    if (req.method === 'GET') {
      resp.writeHead(200, 'OK');
      resp.end(JSON.stringify({data: data}));
    } else if (req.method === 'POST') {
      var str = '';
      req.on('data', function (d) {
        str += d;
      });
      req.on('end', function () {
        var parsed = JSON.parse(str);
        parsed.id = getId();
        data.push(parsed);
        resp.writeHead(200, 'OK');
        resp.end(JSON.stringify({data: parsed}));
      });
    } else if (req.method === 'OPTIONS') {
      resp.writeHead(200, 'OK');
      resp.end();
    } else {
      respondWithError(resp);
    }
  } else {
    respondWithError(resp);
  }
}

var server = http.createServer(handleRequest);
server.listen(PORT, HOST, function() {
  console.log('Listening on:', HOST + ':' + PORT);
});
