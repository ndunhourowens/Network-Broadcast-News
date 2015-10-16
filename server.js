var net = require('net');
var data = '';

var HOST = '0.0.0.0';
var PORT = '6969';

var server = net.createServer(function(socket) { //'connection' listener
  // event for connection
  console.log('client connected');

  socket.write('hello from server');


  socket.on('data', function(data){
    console.log('Recieved From client: ', data.toString());
  });

  socket.on('end', function() {
    console.log('client disconnected');
  });
});
server.listen(PORT, function() { //'listening' listener
  console.log('server bound');
});




