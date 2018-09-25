var socketio = io.connect('https://phonegameserver.herokuapp.com/');
var socket_id = 0;

//websocketコールバックの準備
socketio.on("playerConnectNotice", function (data) { 
  if (data['socket_id']) {
    socket_id = data['socket_id'];
    console.log(socket_id);
  }
  else {
    console.log('idないよ');
  }
});

function serverConnected() {
  socketio.emit("playerConnected", 'game');
}

window.onload = function () {
  serverConnected();
}

function playerAction(data) {
  socketio.emit("playerAction", socket_id, data);
}