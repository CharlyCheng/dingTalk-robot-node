const schedule= require("../libs/lib.js")
const JjSend = require("./juejin")
const WeatherSend = require("./weather")

const scheduleMessage = [
    {
        "timer": "0 06 14 * * 0-7",
        "sendContent": JjSend.JjSend
    },
    {
        "timer": "0 06 14 * * 0-7",
        "sendContent": WeatherSend.WeatherSend
    }
]

exports.dingTalkMessage = () => {
    schedule.scheduleStyle(scheduleMessage)
}