import * as types from './mutation-types'

export default {
  addTotalPageCount({ commit }, time) {
    commit(types.ADD_TOTAL_PAGECOUNT, time)
  },
  decTotalPageCount({ commit }, time) {
    commit(types.DEC_TOTAL_PAGECOUNT, time)
  },
  savePage({ commit }, page) {
    commit(types.SAVE_PAGE, page);
  },
  deletePage({ commit }, page) {
    commit(types.DELETE_PAGE, page)
  }
};
