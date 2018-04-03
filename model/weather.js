const config = require("../config/config.js")
const http = require("../service/http.service.js")
const dingSM = require("../controller/dingdingSend.js")

// {
//     "msgtype": "markdown",
//     "markdown": {
//         "title":"杭州天气",
//         "text": "#### 杭州天气 @156xxxx8827\n" +
//                 "> 9度，西北风1级，空气良89，相对温度73%\n\n" +
//                 "> ![screenshot](http://image.jpg)\n"  +
//                 "> ###### 10点20分发布 [天气](http://www.thinkpage.cn/) \n"
//     },
//    "at": {
//        "atMobiles": [
//            "156xxxx8827", 
//            "189xxxx8325"
//        ], 
//        "isAtAll": false
//    }
// }

module.exports = function WeatherSend() {
    let jMessage = {
        "msgtype": "markdown",
        "markdown": {},
        "at": {
            "atMobiles": [
                "156xxxx8827", 
                "189xxxx8325"
            ], 
            "isAtAll": false
        }
    };
    http.get(config.WeatherApi).then( data => { 
        let jList = data.data.d.entrylist;
        let jLink = [];
        for (let i = 0; i < jList.length; i++) {
            let element = jList[i];
            let ji = {}
            
            ji.title = element.title
            ji.messageURL = element.OriginalUrl
            ji.picURL = element.imageUrl || "http://ding-1253141962.costj.myqcloud.com/fe.jpg"
            jLink.push(ji)
        }
        jMessage.feedCard.links = jLink;
    }).then((data) => {
        dingSM.sendMessage("",jMessage)
    })
}