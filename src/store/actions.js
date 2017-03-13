import * as types from './mutation-types'
import api from '../api/api'

export default {
  getItemList({commit}){
    api.indexGetList((res)=>{
      commit(types.GET_ITEM_LIST,res);
    })
  },
  getItemDetail({commit},id){
    api.indexGetDetail(id,(res)=>{
      commit(types.GET_ITEM_DETAIL,res);
    })
  }
  // addTotalPageCount({ commit }, time) {
  //   commit(types.ADD_TOTAL_PAGECOUNT, time)
  // },
  // decTotalPageCount({ commit }, time) {
  //   commit(types.DEC_TOTAL_PAGECOUNT, time)
  // },
  // savePage({ commit }, page) {
  //   commit(types.SAVE_PAGE, page);
  // },
  // deletePage({ commit }, page) {
  //   commit(types.DELETE_PAGE, page)
  // }
};
