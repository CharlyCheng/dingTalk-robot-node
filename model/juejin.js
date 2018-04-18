const config = require("../config/env.config.js")
const http = require("../service/http.service.js")
const dingSM = require("../controller/dingdingSend.js")

module.exports = function JjSend() {
    let jMessage = {
        "msgtype": "feedCard",
        "feedCard": {}
    };
    http.get(config.jueJinApi).then( data => { 
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
        dingSM.sendMessage("",jMessage)
    }).then((data) => {
        
    })
}
