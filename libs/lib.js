const schedule = require("node-schedule");

function scheduleStyle (scheduleMessage) {
    
    scheduleMessage.forEach ( (element, index) => {
        schedule.scheduleJob(element.timer,  element.sendContent)
    })
    
}

module.exports = {
    scheduleStyle: scheduleStyle
}