var websocket = require("./wsserver");
var connections = Object.create(null); // to keep track of who's connecting

websocket.listen(9999, "localhost", function(conn) {
  conn.id = Math.random().toString().substr(2); //generate random id for user
  connections[conn.id] = conn;
  console.log("new connection: " + conn.id);

  conn.on("data", function(opcode, data) {
    console.log("\t" + conn.id + ":\t" + data);

    try{
      client.write(data+'\n'); // send to normal socket
    } catch(err) {
      console.log(err);
    }

  });

  conn.on("close", function(code, reason) {
    console.log("closed: " + conn.id, code, reason);
    delete connections[conn.id];
  });
});


// Setup normal socket
var net = require('net');

var client = new net.Socket();

client.connect(4000, '127.0.0.1', function() {
	console.log('Connected to normal socket');
});

client.on('data', function(data) {
	console.log('Received from normal socket: ' + data);
	// client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection to normal socket closed');
});
