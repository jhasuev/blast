import { createStore } from "vuex"

export default createStore({
  state: {
    scores: {
      record: 227,
      current: 69,
    },
  },

  getters: {
    getScores: (state) => state.scores,
  },

  mutations: {},
  
  actions: {},
})