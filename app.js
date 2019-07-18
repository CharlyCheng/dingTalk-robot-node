
const Koa = require("koa");
const app = new Koa();
const config = require("./config/env.config.js")
const dingTalkMessage = require("./model/index.js");

dingTalkMessage.dingTalkMessage()

app.use(async ctx => {
    ctx.body = "你的机器人正在服务"
})

app.listen(config.port, function(){
    console.log('http://localhost:3000')
})