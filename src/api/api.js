import axios from 'axios';
import qs from 'qs';
axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置
//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});
export  default {

    /*
     * 登陆
     * */
    login:function (name,psd,cb) {
        axios.post('/api/login',{
          'name':name,
          'password':psd
        }).then(function (res) {
              cb(res.data)
        });

    },
    /*
     * 登出
     * */
    logout:function (cb) {

        axios.get('/api/logout').then(function (res) {
            setTimeout(()=>{
              cb(res.data)
            },300)
        });

    },
    /*
     * 获取首页列表信息
     * */
    indexGetList:function (offset,limit,cb) {

        axios.get('/api/getListLimit',{params:{'limit':limit,'offset':offset}}).then(function (res) {
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
