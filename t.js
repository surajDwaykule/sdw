
var server = require('express')();

server.get('/', function(req, res) {
  res.send("Hello Foo!");
});

var listener = server.listen(3000);
console.log('Your friendly Express server, listening on port %s', listener.address().port);
// Your friendly Express server, listening on port 3000