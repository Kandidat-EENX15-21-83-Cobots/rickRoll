const Kinect2 = require('kinect2');
const kinect = new Kinect2();
var io = require('socket.io')

var connections = 0

io.on('connection', (client) => { 
      connections++
      client.on('disconnect', (user) => {
        console.log("disconnected")
        connections--
    });
 });

server.listen(process.env.PORT || 5000);
 
const startKinect = () => {
  if (kinect.open()) {
    kinect.on('bodyFrame', (bodyFrame) => {
      if(connections<1)
        return
      io.local.emit("kinect broadcast", bodyFrame);
    });

    kinect.openBodyReader();
  }
};

startKinect()