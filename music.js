//libraries-----START-------------------------------
var io = require('socket.io-client')
var robotjs = require('robotjs')
var sound = require('sound-play')
//music can't get played throught visual studio code
//libraries-----END-------------------------------

//connect to servers------START-----------------------------------------------------------------
socket_kinect = io.connect("ws://" + (process.env.DEST || "localhost") + ":" + (process.env.PORT || 5000))
//socket_mouse = io.connect("ws://" + (process.env.DEST || "localhost") + ":" + (process.env.PORT || 6000))
var HOST = '192.168.137.1'; //these variables do anything?
var PORT = 5000;

socket_kinect.on('connect', () => {
    console.log("kinnect Connected")
})

/*socket_mouse.on('connect', () => {
    console.log("mouse Connected")
})*/
//connect to servers-----END--------------------------------------------------------------------

//global variable declaration -----START--------------------------------------------------
human_tracked=false
mouse_pos=[0,0] //using states better?


//global variable declaration -----END--------------------------------------------------

//main code-------START-------------------------------------------------------------

//when detecting a human do:
// *open music
// *control computer (keyboard/mouse)
socket_kinect.onAny(function(event, data) { 
    var k=data.bodies.filter(element => element.tracked);
    //console.log(k);
    if(k.length){
        if(!human_tracked){
            console.log("I've spotted you")
            human_tracked=true
            play()
        }
    }else{
        if(human_tracked) {
            stop();
            console.log('not in frame anymore')
        }    
        human_tracked=false
    }
});

/*socket_mouse.onAny(function(event, data) { 
   console.log(data)
});*/


//-----functions---------------------
function play() {
    robotjs.keyTap("audio_play")
}

function stop() {
    robotjs.keyTap("audio_pause")
}

//get rickrolled
function Youtube() {
    console.log('rick rolled')
    robotjs.setMouseDelay(1);
    var x = 600; var y=850;
    robotjs.moveMouse(x, y);
    robotjs.mouseClick()
    robotjs.setMouseDelay(1);
    var x = 600; var y=800;
    robotjs.moveMouse(x, y);
    robotjs.mouseClick()
    robotjs.setMouseDelay(1);
    var x = 470; var y=28;
    robotjs.moveMouse(x, y);
    robotjs.mouseClick()
    robotjs.setMouseDelay(1);
    var x = 470; var y=400;
    robotjs.moveMouse(x, y);
    robotjs.mouseClick()
}

//get current position of mouse
function getPos() {
    
}


