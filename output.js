var fs = require('fs');
var robot = require('robotjs');
var sleep = require('sleep');
var data = fs.readFileSync('bot.txt');
var conversion= require('./conversion');
var captureMotion = JSON.parse(data);

//start imitating user
//skip the data used to initialize
for(var j= 1; j< captureMotion.length; j++){

    sleep.msleep(captureMotion[j][2]);

    robot.moveMouse(captureMotion[j][0],captureMotion[j][1]);

    if(captureMotion[j][3] == 127){

        robot.mouseClick();

    }else if(captureMotion[j][3] == 128){

        if(captureMotion[j-1][3] == 128){

            robot.mouseToggle('up','left');
        }else{

            robot.mouseToggle('down','left');
        }

    }else{

        robot.keyTap(conversion.keycodeConversion( captureMotion[j][3]).toLowerCase() );

    }
    
};

return console.log('\nprogram ended');
