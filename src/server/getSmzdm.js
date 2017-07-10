var request = require('request')
var rp = require('request-promise')
var cheerio = require('cheerio')
var mysql = require('mysql')
var dbConfig = require('./db/DBconfig')
var pageSQL = require('./db/sql')

cheerio.prototype.removeTagText = function() {
        var html = this.html()
        return html.replace(/<([\w\d]+)\b[^<]+?<\/\1>/g, (m) => {
            return ''
        })
    }
    /*sql连接*/
var connection = mysql.createConnection(dbConfig.mysql);
connection.connect();

connection.query(pageSQL.delete, (err, result) => {
    console.log(`清空stuff表`)
})
var $this,
    _nextHref = null
_nextHref = 'http://www.smzdm.com/youhui/'
const donePage = [];
const toDo = [];
    fetchDataAndInsertIntoTable(_nextHref)



function fetchOption(url) {
    return {
        uri: url,
        transform: function(body) {
            return cheerio.load(body, {
                decodeEntities: false
            })
        }
    }
}
// function pageDone(doneUrl){
//     donePage.push(doneUrl).
// }
function fetchDataAndInsertIntoTable(url) {
    rp(fetchOption(url)).then( ($) => {
            $this = $('.pagination .pageCurrent')
            _nextHref = $this.parent().next().children().attr('href')
            // $('.pagination > li > a').map((item)=>{
            //     let _temp = $(item).attr('href')
            //     if(donePage.indexOf(_temp) == -1){//没有完成过

            //     }else if(){

            //     }
            // })

            $('.list.list_preferential').each((i, item) => {
                var $title = $('.itemName a', item)
                var url = $title.attr('href')//detailUrl
                var title = $title.removeTagText().trim()//title
                var pricetext = $title.children().text().trim()//priceText
                var img = $('img', item).attr('src')//image
                var desc = $('.lrInfo', item).html().trim()
                desc = desc.replace(/<a\b.+?>阅读全文<\/a>/g, '')//desc
                var mall = $('.botPart a.mall', item).text().trim()//source
                var temp = url.substring(0, url.length - 1)
                var stuffId = temp.replace(/.*\//, '')//id
                var createtime = $('.lrTime',item).text().trim()//createtime
                var like = $('.lrBot .good .scoreTotal',item).attr('value')//like
                var unlike = $('.lrBot .bad .scoreTotal',item).attr('value')//unlike
                var commentHtml = $('.comment',item).html().replace(/<\/?[^>]*>/g, '').trim();
                var commentno = commentHtml.substring(2,commentHtml.length)//commentNo
                console.log({ stuffId, title, pricetext, url, img, desc, mall,createtime,like,unlike,commentno })
                connection.query(pageSQL.ins, [stuffId, title, pricetext, url, img, desc, mall,createtime,like,unlike,commentno], (err, result) => {
                    if (!err) {
                        console.log(`插入id为${stuffId}数据成功`)
                    } else {
                        console.log(err)
                    }
                })
                // donePage.push(url);
            })
            if(_nextHref!= url){
                fetchDataAndInsertIntoTable(_nextHref)
            }
        }).catch((err) => {
            console.log(err)
        })
}
