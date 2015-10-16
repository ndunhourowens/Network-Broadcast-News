var net = require('net');

var HOST = '0.0.0.0';
var PORT = '6969';

var client = new net.Socket();

client.connect(PORT, HOST, function() {
  console.log('connected on client side');
  client.write('hello from client');

  process.stdin.on('data', function(chunk){
    client.write(chunk);
  });
});

client.on('data', function(data){
  console.log('Recieve from Server: ', data.toString());
  // client.destroy();
});

client.on('end', function(data){
  console.log('server disconnected');
});

// client.on('close', function(){
//   console.log('connection closed');
// });

