import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { name: "se reveiller à 5h du matin" },
      { name: "lire la bible" },
      { name: "prier" },
      { name: "prendre ma douche" }
    ]

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
