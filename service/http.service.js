var axios = require("axios")

module.exports = {
    get: function(url,option){
        return new Promise(function(resolve, reject){
            axios.get(url).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });
        })
    },
    post: function(url,data,option){
        return new Promise(function(resolve, reject){
            axios.post(url,data).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error);
            });
        })
    }
}


