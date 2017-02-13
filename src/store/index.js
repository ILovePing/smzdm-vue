import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

// 先写个假数据
const state = {
  totalPageCount: 1,
  username:'Bbb',
  pagelist: [{
    name : '3b',
    pageImage : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    content : 'hello,world!!'
  }]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})
