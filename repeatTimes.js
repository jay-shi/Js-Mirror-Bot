var repeat = require('./output');
var stdin = process.openStdin();

stdin.once('data', (data)=>{

    //console.log( parseInt(data.toString()) );
    console.log(parseInt(data.toString()));

    for(var i=0; i< data.toString(); i++){
        
        repeat.runBot;

        if(i= parseInt(data.toString()) -1 ) process.exit(1);
    }

});