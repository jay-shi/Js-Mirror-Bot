# Mirror-Bot

***

**This NodeJs-based project can record keystroke, mouseclick and mousedrag, and then create automated simulation.**

It can be used for automation test, game bot or even tricking friends into thinking their computer has malware.

*NOTE: This app currently only works for MacOS, but the windows and linux version will sonn be implemented.*

*Instruction video will be uploaded soon.*

## Demo Video
[![IMAGE ALT TEXT](http://img.youtube.com/vi/utqzZF7yDpY/0.jpg)](https://youtu.be/utqzZF7yDpY "Mirror Bot Demo")

## Usage:

  1. `git clone` this app
  1. go (cd) to the directory root of this app
  1. command `npm install`
  1. command `node input` to start recording
  1. Press **Tab** key to stop recording (you can change this setting in the input.js)
  1. exit the recording by press `ctrl+c`
  1. command `node output` to start automation
  
## RoadMap:
  1. Add Instruction and Demo Videos
  1. Implement mousedrag function
  1. Fix bugs caused by incorrect event listening (mistake mouseclick with mouseDrag)
  1. GUI
  1. Migrate to Java platform
  
  
## Credits:

 This project is built based on NodeJS v6.10.3. Thank nodejs team for making such amazing framework.
 
 The node modules/packages I used for this project are iohook, sleep and robotjs. 
 
 Thank @WilixLead, @OctalMage, @ErikDubbelboer for making such great modules/packages!
 
 **Here are the links of used modules/framework:** 
 
 * [Nodejs](https://nodejs.org/en/)
  
 * [Iohook](https://github.com/WilixLead/iohook)
 
 * [Robotjs](https://github.com/octalmage/robotjs)
 
 * [sleep](https://github.com/erikdubbelboer/node-sleep)
 
  
  
  


