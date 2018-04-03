const Koa = require("koa");
const app = new Koa();
const dingTalkMessage = require("./model/index.js")



dingTalkMessage()


app.use(async ctx => {
    ctx.body = "hello world"
})

app.listen(3000)