function WsLib(url, port) {
  var ws = new WebSocket("ws://"+url+":"+port+"/repl");
  var rtg = 0;
  ws.onopen = function () {
    // ws.send('ping'); // Send the message 'Ping' to the server
    rtg = 1;
  };

  ws.onmessage = function(e) {
    console.log(e.data);
      // console.log("command: ", e.data);
      // try {
      //     var result = eval(e.data);
      //     ws.send(result.toString());
      // } catch (err) {
      //     ws.send(err.toString());
      // }
  };

  ws.onerror = function (error) {
    console.log('WebSocket Error ' + error);
  };

  ws.onclose = function(e) {
    console.log(e);
  };

  this.sendmsg = function(tmsg) {
    if (rtg == 1) {
      try {
        ws.send(tmsg);
      } catch (err) {
        console.log(err);
      }

    } else {
      console.log("had to wait");
      setTimeout(function() {
      try {
        ws.send(tmsg);
      } catch (err) {
        console.log(err);
      }
    }, 50);
    }
  };

}
