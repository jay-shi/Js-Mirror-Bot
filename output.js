var fs = require('fs');
var robot = require('robotjs');
var sleep = require('sleep');
var data = fs.readFileSync('bot.txt');
var conversion= require('./conversion');
var captureMotion = JSON.parse(data);

//start imitating user
//skip the data used to initialize
for(var j= 1; j< captureMotion.length; j++){

    motion = captureMotion[j];
    sleep.msleep(motion.interval);
    robot.moveMouse(motion.x, motion.y);
    motionEvent = motion.rawcode;

    if(motionEvent == 127) {
        robot.mouseClick();
    } else if(motionEvent== 128) {

        preMotion = captureMotion[j-1];

        if(preMotion.rawcode == 128) {
            robot.mouseToggle('up','left');
        } else {
            robot.mouseToggle('down','left');
        }

    } else {
        tapKey = conversion.keycodeConversion( motionEvent.toLowerCase());
        robot.keyTap(tapKey);
    }
    
};

return console.log('\nprogram ended');
