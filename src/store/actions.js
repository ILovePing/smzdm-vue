import * as types from './mutation-types'
import api from '../api/api'

export default {
  getItemList({commit},payload){
    api.indexGetList(payload.offset,payload.limit,(res)=>{
      commit(types.GET_ITEM_LIST,res);
    })
  },
  getItemDetail({commit},id){
    api.indexGetDetail(id,(res)=>{
      commit(types.GET_ITEM_DETAIL,res);
    })
  }
};
