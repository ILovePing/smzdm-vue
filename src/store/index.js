import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 先写个state数据
const state = {
  itemDetail:{},
  username:'Bbb',
  homeDataList:[],
  fullScreen:false
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
