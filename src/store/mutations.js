import * as types from './mutation-types'
export default {
  //   // 增加总文章数量
  // [types.ADD_TOTAL_PAGECOUNT] (state, time=1) {
  //   state.totalPageCount = state.totalPageCount + time
  // },
  // // 减少总文章数量
  // [types.DEC_TOTAL_PAGECOUNT] (state, time=1) {
  //   state.totalPageCount = (state.totalPageCount - time) < 0 ? 0 : (state.totalPageCount - time)
  // },
  // // 新增文章
  // [types.SAVE_PAGE] (state, page) {
  //   // 设置默认值，未来我们可以做登入直接读取昵称和头像
  //   // const pageImage = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
  //
  //   state.pagelist.push(
  //     Object.assign({ username: state.username, }, page)
  //   )
  // },
  // // 删除某文章
  // [types.DELETE_PAGE] (state, idx) {
  //   state.pagelist.splice(idx, 1);
  // }
  [types.GET_ITEM_DETAIL] (state,res){
    state.itemDetail = res;
  },
  [types.GET_ITEM_LIST] (state,res){
    console.info(res)
    state.homeDataList = state.homeDataList.concat(res);
  }
};
