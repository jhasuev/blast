import { createStore } from "vuex"

export default createStore({
  state: {
    scores: {
      record: Number(localStorage.record || 0),
      current: 0,
    },
  },

  getters: {
    getScore: (state) => state.scores.current,
    getRecord: (state) => state.scores.record,
  },

  mutations: {
    SET_RECORD(state, score) {
      state.scores.record = score
    },

    ADD_SCORE(state, score) {
      state.scores.current += score
    },

    SET_SCORE(state, score) {
      state.scores.current = score
    },

    SAVE(state) {
      localStorage.record = state.scores.record
    },
  },

  actions: {
    addScore({ state, commit }, score){
      commit("ADD_SCORE", score)
      commit("SET_RECORD", Math.max(state.scores.record, state.scores.current))
      commit("SAVE")
    },

    setScore({ commit }, score){
      commit("SET_SCORE", score)
    },
  },
})