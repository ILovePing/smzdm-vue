var pageSQL = {
                delete:'delete from stuff',
                upd:'UPDATE stuff SET stuffTitle = ?,stuffHl=?,detailUrl=?,stuffImage=?,stuffDesc=? where stuffId = ?',
                ins:'INSERT into stuff(stuffId,stuffTitle,stuffPriceText,detailUrl,stuffImage,stuffDesc,stuffSource,createtime,good,bad,commentNo) values (?,?,?,?,?,?,?,?,?,?,?)',
                insOrUpd:'INSERT into stuff(stuffId,stuffTitle,stuffHl,detailUrl,stuffImage,stuffDesc) select ?,?,?,?,?,? from dual where not EXISTS (select stuff.stuffId from stuff where stuffId = ?)'
              };
 module.exports = pageSQL;