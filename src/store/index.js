import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 先写个state数据
const state = {
  itemDetail:{},
  name:'',
  isLogin:false,
  homeDataList:[],
  fullScreen:false,
  logFeedback:{}
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
