import axios from 'axios';

export  default {

    /*
     * 获取首页列表信息
     * */
    indexGetList:function (cb) {

        axios.get('/index/getList').then(function (res) {
            if(res.data.data.code ==1000){
                setTimeout(function () {
                    cb(res.data.data.data);
                },300)

            }

        });

    },
    /*
     * 获取首页列表详情信息
     * */
    indexGetDetail:function (id,cb) {

        axios.get('http://localhost:3000/getStuff',{params:{'id':id}}).then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            })

        });

    },
  }
