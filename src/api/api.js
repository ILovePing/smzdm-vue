import axios from 'axios';

export  default {

    /*
     * 登陆
     * */
    login:function (name,psd,cb) {
      var params = new URLSearchParams();
params.append('name', name);
params.append('password', psd);
        axios.post('/api/login',params).then(function (res) {
              cb(res.data)
        });

    },
    /*
     * 登出
     * */
    logout:function (name,password,cb) {

        axios.get('/api/logout').then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)
        });

    },
    /*
     * 获取首页列表信息
     * */
    indexGetList:function (limit,cb) {

        axios.get('/api/getListLimit',{params:{'limit':limit}}).then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)
        });

    },
    /*
     * 获取首页列表详情信息
     * */
    indexGetDetail:function (id,cb) {

        axios.get('/api/getStuff',{params:{'id':id}}).then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)

        });

    },
  }
