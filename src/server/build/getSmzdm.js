'use strict';
require('babel-polyfill');
var fetchDataAndInsertIntoTable = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return rp(fetchOption(url)).then(function ($) {
                            $this = $('.pagination .pageCurrent');
                            _nextHref = $this.parent().next().children().attr('href');

                            $('.list.list_preferential').each(function (i, item) {
                                var $title = $('.itemName a', item);
                                var url = $title.attr('href');
                                var title = $title.removeTagText().trim();
                                var hl = $title.children().text().trim();
                                var img = $('img', item).attr('src');
                                var desc = $('.lrInfo', item).html().trim();
                                desc = desc.replace(/<a\b.+?>阅读全文<\/a>/g, '');
                                var mall = $('.botPart a.mall', item).text().trim();
                                var temp = url.substring(0, url.length - 1);
                                var stuffId = temp.replace(/.*\//, '');
                                console.log({ stuffId: stuffId, title: title, hl: hl, url: url, img: img, desc: desc, mall: mall });
                                connection.query(pageSQL.ins, [stuffId, title, hl, url, img, desc], function (err, result) {
                                    if (!err) {
                                        console.log('\u63D2\u5165id\u4E3A' + stuffId + '\u6570\u636E\u6210\u529F');
                                    } else {
                                        console.log(err);
                                    }
                                });
                            });
                        }).catch(function (err) {
                            console.log(err);
                        });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function fetchDataAndInsertIntoTable(_x) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var request = require('request');
var rp = require('request-promise');
var cheerio = require('cheerio');
var mysql = require('mysql');
var dbConfig = require('./db/DBconfig');
var pageSQL = require('./db/sql');

//重写cheerio.prototype.removeTagText方法
cheerio.prototype.removeTagText = function () {
    var html = this.html();
    return html.replace(/<([\w\d]+)\b[^<]+?<\/\1>/g, function (m) {
        return '';
    });
};
/*sql连接跑起来啊跑起来*/
var connection = mysql.createConnection(dbConfig.mysql);
connection.connect();

connection.query(pageSQL.delete, function (err, result) {
    console.log('\u6E05\u7A7Astuff\u8868');
});
var $this,
    _nextHref = null;
// fetchDataAndInsertIntoTable()
_nextHref = 'http://www.smzdm.com/youhui/';
// setTimeout(() => {
//     console.log(_nextHref)
fetchDataAndInsertIntoTable(_nextHref);
fetchDataAndInsertIntoTable(_nextHref);
// do {
//     fetchDataAndInsertIntoTable(_nextHref)
// }while (_nextHref)
// }, 3000)


function fetchOption(url) {
    return {
        uri: url,
        transform: function transform(body) {
            return cheerio.load(body, {
                decodeEntities: false
            });
        }
    };
}