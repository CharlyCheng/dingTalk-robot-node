const schedule= require("../libs/lib.js")
const JjSend = require("./juejin")
const WeatherSend = require("./weather")

const scheduleMessage = [
    {
        "timer": "0 10 09 * * 0-7",
        "sendContent": JjSend.JjSend
    },
    {
        "timer": "0 10 08 * * 0-7",
        "sendContent": WeatherSend.WeatherSend
    },
    {
        "timer": "0 30 11 * * 5",
        "sendContent": WeatherSend.WeekBookSend
    }
]

exports.dingTalkMessage = () => {
    schedule.scheduleStyle(scheduleMessage)
}