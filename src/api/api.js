import axios from 'axios';

export  default {

    /*
     * 获取首页列表信息
     * */
    indexGetList:function (limit,cb) {

        axios.get('http://localhost:3000/getListLimit',{params:{'limit':limit}}).then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)
        });

    },
    /*
     * 获取首页列表详情信息
     * */
    indexGetDetail:function (id,cb) {

        axios.get('http://localhost:3000/getStuff',{params:{'id':id}}).then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)

        });

    },
  }
