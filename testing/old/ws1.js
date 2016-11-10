var connection = new WebSocket('ws://127.0.0.1:4000');

connection.onopen = function () {
  connection.send("sphere -n \"new_sphere\";\n"); // Send the message 'Ping' to the server
};

connection.onmessage = function (event) {
  console.log(event.data);
};
