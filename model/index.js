const schedule= require("../libs/lib.js")
const jSend = require("./juejin")
const WeatherSend = require("./weather")

const scheduleMessage = [
    {
        "timer": "0 23 15 * * 0-7",
        "sendContent": jSend
    },
    {
        "timer": "0 17 11 * * 0-7",
        "sendContent": WeatherSend
    }
]

module.exports = function dingTalkMessage () {
    schedule.scheduleStyle(scheduleMessage)
}