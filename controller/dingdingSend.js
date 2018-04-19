const http = require("../service/http.service.js")
const config = require("../config/env.config.js")

let sendMessage = async  (url , params) => {
    const res =  await http.post(url || config.dingTalkApi, params)
}

module.exports = {
    sendMessage
}
