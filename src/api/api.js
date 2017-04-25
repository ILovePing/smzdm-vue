import axios from 'axios';

export  default {

    /*
     * 登陆
     * */
    login:function (name,password,cb) {

        axios.post('/api/login',{params:{'name':name,'password':password}}).then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)
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
