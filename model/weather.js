const config = require("../config/env.config.js")
const http = require("../service/http.service.js")
const dingSM = require("../controller/dingdingSend.js")

module.exports = function WeatherSend() {
    let jMessage = {
        "msgtype": "markdown",
        "markdown": {},
        "at": {
            "atMobiles": [
                "156xxxx8827"
            ], 
            "isAtAll": false
        }
    };
    http.get(config.WeatherApi).then( (data) => {
        let jList = data.data.HeWeather5;
        let jLink = [];
        for (let i = 0; i < jList.length; i++) {
            let element = jList[i]
            jMessage.markdown.title = element.basic.city
            jMessage.markdown.text = "#### "+ element.basic.city  +"天气\n > 温度"+ element.now.tmp + "度,"+ element.now.wind.dir + element.now.tmp +"级，空气良89，相对温度73%\n\n > ![screenshot](http://i01.lw.aliimg.com/media/lALPBbCc1ZhJGIvNAkzNBLA_1200_588.png)\n  > ###### "+ element.basic.update.loc +"发布 [风和天气为你服务](http://www.thinkpage.cn/) "
        }       
        dingSM.sendMessage("",jMessage)
    })
}