const cron = require("node-cron");
let shell = require("shelljs");
let cmp=0
cron.schedule("* * * * * *", function(){
    cmp++;
    console.log("Scheduler running ...", cmp);
    if(shell.exec("dir").code !== 0){
        console.log("Someth ing went wrong")
    }
})