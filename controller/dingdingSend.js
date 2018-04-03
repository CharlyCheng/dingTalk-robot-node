const http = require("../service/http.service.js")
const config = require("../config/config.js")

async function sendMessage(url , params) {
    url = url || config.dingTalkApi;
    const res =  await http.post(url, params)
}

module.exports = {
    sendMessage: sendMessage
}
