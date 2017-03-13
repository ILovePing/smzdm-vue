import axios from 'axios';

export  default {

    /*
     * 获取首页列表信息
     * */
    indexGetList:function (cb) {

        axios.get('http://localhost:3000/getListLimit10').then(function (res) {
            // if(res.data.data.code ==1000){
            //     setTimeout(function () {
            //         cb(res.data.data.data);
            //     },300)
            //
            // }
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
              // console.log(res)
              cb(res.data)
            },300)

        });

    },
  }
