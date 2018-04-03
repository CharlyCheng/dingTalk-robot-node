const schedule = require("node-schedule");

function scheduleStyle (dataString, callback) {
    schedule.scheduleJob(dataString, function(){
        callback()
    });
}

module.exports = {
    scheduleStyle: scheduleStyle
}