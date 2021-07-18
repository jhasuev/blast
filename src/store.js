import { createStore } from "vuex"

export default createStore({
  state: {
    scores: {
      record: 0,
      current: 0,
    },
  },

  getters: {
    getScores: (state) => state.scores,
  },

  mutations: {
    SET_RECORD_SCORE(state, score) {
      state.scores.record = score
    },

    ADD_SCORE(state, score) {
      console.log(state.scores.current, score);
      state.scores.current += score
    },
  },

  actions: {
    setRecordScores({ commit }, score){
      commit("SET_RECORD_SCORE", score)
    },

    addScore({ commit }, score){
      commit("ADD_SCORE", score * 3)
    },
  },
})