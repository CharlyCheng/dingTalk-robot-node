const config = require("../config/env.config.js")
const http = require("../service/http.service.js")
const lib = require("../libs/lib.js")

let JjSend = async function () { 
    let res = await  http.get(config.jueJinApi)
    
    lib.handleMessage(res, "JjType")
}

module.exports = {
    JjSend 
}
