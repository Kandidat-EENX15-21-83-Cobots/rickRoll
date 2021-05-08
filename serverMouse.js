var io = require('socket.io')
var ioHook = require('iohook')

var connections = 0

io.on('connection', (client) => { 
      connections++
      client.on('disconnect', (user) => {
        console.log("disconnected")
        connections--
    });
 });

server.listen(process.env.PORT || 6000);
 

const startMouse = () => {
  ioHook.on('mouseclick', event => {
    //console.log(event); // { type: 'mousemove', x: 700, y: 400 }
    io.local.emit(event);
  });

  ioHook.on('mousemove', event => {
    //console.log(event); // { type: 'mousemove', x: 700, y: 400 }
    io.local.emit(event);
  });
   
};

startMouse()