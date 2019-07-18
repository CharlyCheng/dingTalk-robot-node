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
            let jMessage = {
                "msgtype": "news",
                "news": {}
            }
            let jList = res.data.d.entrylist;
            let jLink = [];
            for (let i = 0; i < jList.length; i++) {
                let element = jList[i];
                let ji = {}   
                ji.title = element.title
                ji.url = element.originalUrl
                ji.picurl = element.screenshot || element.user.avatarLarge || "http://ding-1253141962.costj.myqcloud.com/fe.jpg"
                jLink.push(ji)
            }
            jMessage.news.articles = jLink;
            dingSM.sendMessage("",jMessage)
            break;
        case "weatherType":
            let wMessage = {
                "msgtype": "markdown",
                "markdown": {}
            };
            let wList = res.data.HeWeather5;
            for (let i = 0; i < wList.length; i++) {
                let element = wList[i]
                wMessage.markdown.content = `##### ${element.basic.city}天气\n${element.now.cond.txt}，${element.now.tmp}度，${element.now.wind.dir}${element.now.wind.sc}级，空气良89\n\n友情提示：🚴骑车步行的小伙伴，注意天气奥\n\n###### ${element.basic.update.loc}`
            }
            dingSM.sendMessage("",wMessage)
            break;
        case "weekType":
            let weekMessage = {
                "msgtype": "text",
                "text": {
                    "content": "来自海外的声音：周五了，别忘记发周报!!!",
                    "mentioned_mobile_list":["@all"]
                }
            }
            dingSM.sendMessage("",weekMessage)
            break;
        default:
            break;
    }
    
}

exports = module.exports = {
    scheduleStyle,
    handleMessage
}