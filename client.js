var net = require('net');

var HOST = '0.0.0.0';
var PORT = '6969';

var client = new net.Socket();

client.connect(PORT, HOST, function() {
  console.log('connected');
  client.write('hello, server');
});

client.on('data', function(data){
  console.log('Recieve: ', data);
  client.destroy();
});

client.on('close', function(){
  console.log('connection closed');
});

