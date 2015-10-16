var net = require('net');
var fs = require('fs');
var data = '';
var users = [];

var HOST = '0.0.0.0';
var PORT = '6969';

var server = net.createServer(function(socket) { //'connection' listener
  // event for connection
  console.log('client connected');
  users.push(socket);


  socket.write('hello from server');


  socket.on('data', function(data){
    console.log('Recieved From client: ', data.toString());
    communication(data);
  });


  socket.on('end', function() {
    console.log('client disconnected');
  });


});


server.listen(PORT, function() { //'listening' listener
  console.log('server bound');
});

// =================  communicate between clients  =========
function communication(data){
  for(var i = 0; i < users.length; i++){
    users[i].write(data);
  }
}

/*********  issues

get the data on the server to send out to other users

server needs to determine who sent message







*/
