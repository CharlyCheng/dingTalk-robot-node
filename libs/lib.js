const schedule = require("node-schedule");
const dingSM = require("../controller/dingdingSend.js")


const scheduleStyle = (scheduleMessage) => {
    scheduleMessage.forEach ( (element, index) => {
        element.sendContent
        schedule.scheduleJob(element.timer,  element.sendContent)
    })
    
}

const handleMessage = (res, resType) => {
    switch (resType) {
        case "JjType":
            var jMessage = {
                "msgtype": "feedCard",
                "feedCard": {}
            }
            var jList = res.data.d.entrylist;
            var jLink = [];
            for (let i = 0; i < jList.length; i++) {
                var element = jList[i];
                var ji = {}   
                ji.title = element.title
                ji.messageURL = element.OriginalUrl
                ji.picURL = element.imageUrl || "http://ding-1253141962.costj.myqcloud.com/fe.jpg"
                jLink.push(ji)
            }
            jMessage.feedCard.links = jLink;
            dingSM.sendMessage("",jMessage)
            break;
        case "weatherType":
            var jMessage = {
                "msgtype": "markdown",
                "markdown": {},
                "at": {
                    "atMobiles": [
                        "156xxxx8827"
                    ], 
                    "isAtAll": false
                }
            };
            var jList = res.data.HeWeather5;
            var jLink = [];
            for (let i = 0; i < jList.length; i++) {
                var element = jList[i]
                jMessage.markdown.title = element.basic.city
                jMessage.markdown.text = "#### "+ element.basic.city  +"天气\n > 温度"+ element.now.tmp + "度,"+ element.now.wind.dir + element.now.tmp +"级，空气良89，相对温度73%\n\n > ![screenshot](http://i01.lw.aliimg.com/media/lALPBbCc1ZhJGIvNAkzNBLA_1200_588.png)\n  > ###### "+ element.basic.update.loc +"发布 [风和天气为你服务](http://www.thinkpage.cn/) "
            }       
            dingSM.sendMessage("",jMessage)
            break;
        default:
            break;
    }
    
}

exports = module.exports = {
    scheduleStyle,
    handleMessage
}