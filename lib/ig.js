const axios = require("axios")
const cheerio = require("cheerio")

function opt(link){
    if(!link){
        return new TypeError("can't found instagram provider");
    }
    let page = `https://www.instagram.com/${link}/`
    let ds = axios({
                method:'get',
                url:page
            }).then(res => {
                let $ = cheerio.load(res.data)
                let sc = $('script')[3].children[0].data
                let data = JSON.parse(sc)
                    let username = data.name
                    let ign = data.alternateName
                    let url = data.url || "none"
                    let igl = `https://instagram.com/${link}/`
                    let follower = data.mainEntityofPage.interactionStatistic.userInteractionCount || 0
                    return new Promise((resolve,reject) => {
                        resolve(
                            {
                                "username":username,
                                "igName":ign,
                                "igLink":igl,
                                "ownLink":url,
                                "follower":follower
                            }
                        )
                        reject("Need help with instagram scrapper ?? Join our discord server: https://discord.gg/8rUvTYhFqK");
                    })
            }).catch(err => {
                return new TypeError("Can't found your instagram user selectionn !!, Need help with instagram scrapper ?? Join our discord server: https://discord.gg/8rUvTYhFqK");
            })
    return ds
}

module.exports = opt;