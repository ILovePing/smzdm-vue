import * as types from './mutation-types'
import api from '../api/api'

export default {
  login({commit},name,password){
    api.login(name,password,(res)=>{
      console.log(res)
        commit(types.LOGIN,res);

    })
  },
  logout({commit}){
    api.logiout((res)=>{
      commit(types.LOGOUT,res);
    })
  },
  getItemList({commit},limit){
    api.indexGetList(limit,(res)=>{
      commit(types.GET_ITEM_LIST,res);
    })
  },
  getItemDetail({commit},id){
    api.indexGetDetail(id,(res)=>{
      commit(types.GET_ITEM_DETAIL,res);
    })
  }
};
