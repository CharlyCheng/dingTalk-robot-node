const schedule= require("../libs/lib.js")
const jSend = require("./juejin")
const WeatherSend = require("./weather")


module.exports = function dingTalkMessage () {
    schedule.scheduleStyle("0 27 16 * * 0-7", jSend)
    // schedule.scheduleStyle("0 30 8 * * 0-7", WeatherSend)
}