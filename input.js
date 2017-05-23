//this bot is not moving cursor continuously for performace's sake
//this bot used robot.js and iohook.jsw

'use strict';

//add required modules
var hook= require('iohook');
var robot = require('robotjs');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var mouse, currenttime, duration, data, interval;
var dragFlag = true;
var fs = require('fs');
var writeStream = fs.createWriteStream('bot_array/bot.txt');


//initialize a 4 row array to record coordinates, key character, interval time
//x-coordinate, y-coordinate, time from last press, button character thats being pressed
var captureMotion = [
   
    [600,350,0,'char']
];

//----------------------------------------------------------------------//
console.log('recording starts');
console.log('press tab to stop');

function getTime(){
    
    var date= new Date();
    return date.getTime();

};

var baseTime = getTime();

//binding event keydown and listener
hook.on("keydown", (event)=>{
    
    mouse= robot.getMousePos();

    currenttime = getTime();

    interval= currenttime - baseTime;

    //maping data to array
    captureMotion.push([mouse.x,mouse.y,interval,event.rawcode]);

    baseTime = getTime();

    dragFlag = true;

    //check if user wanna stop recording and start botting
	//press tab to stop 
    if(event.rawcode == 48)eventEmitter.emit('stopListening');

});

hook.addListener("mousedown", (event)=>{

    mouse= robot.getMousePos();

    currenttime = getTime();

    interval= currenttime - baseTime;

    //set the keycode of mouseclick as 127
    captureMotion.push([mouse.x,mouse.y,interval,127]);

    dragFlag = true;

    baseTime = getTime();
});

hook.addListener('mousedrag', (event)=>{
    
    //set the keycode of mousedrag as 128
    if(dragFlag == true){

        currenttime = getTime();

        interval= currenttime - baseTime;

        captureMotion.push([event.x, event.y, interval ,128]);
    }

    dragFlag = false;

});


//used to handle the mousedrag release
hook.addListener('mouseup', event=> {

    mouse= robot.getMousePos();

    if( dragFlag == false){

        captureMotion.push([mouse.x, mouse.y, 100 ,128]);

        baseTime = getTime();
    }

})


//start listening
hook.start();

//------------------------------------------------------------//
eventEmitter.once('stopListening',()=>{
    
    //stop listening to events
    eventEmitter.removeAllListeners('keydown');
    eventEmitter.removeAllListeners('mousedown');

	var buffer = new Buffer.from(JSON.stringify(captureMotion));

    writeStream.write(buffer, 'utf8');
    writeStream.end();

    writeStream.on('finish', function(){
        console.log('writing completed');
    });
    
    writeStream.on('error', function(err){
        console.log(err.stack);
    });

});
