const schedule= require("../libs/lib.js")
const jSend = require("./juejin")
const WeatherSend = require("./weather")


module.exports = function dingTalkMessage () {
    schedule.scheduleStyle("0 10 15 * * 0-7", jSend)
    schedule.scheduleStyle("0 17 11 * * 0-7", WeatherSend)
}