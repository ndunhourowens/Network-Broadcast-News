var net = require('net');
var data = '';

var HOST = '0.0.0.0';
var PORT = '6969';

var server = net.createServer(function(c) { //'connection' listener
  console.log('client connected');
  c.on('end', function() {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.listen(PORT, function() { //'listening' listener
  console.log('server bound');
});




