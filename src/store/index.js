import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { name: "se reveiller à 5h du matin", done: null, status: null, inProgress: true },
      { name: "lire la bible", done: false, status: null, inProgress: true },
      { name: "prier", done: false, status: null, inProgress: true },
      { name: "prendre ma douche", done: false, status: null, inProgress: true }
    ],
    completed: [
      // { name: "essai" },
    ]

  },
  mutations: {
    // ADD_TODO: (state, tasks) => {
    //   state.tasks.push(tasks)
    // }
  },
  actions: {
  },
  modules: {
  }
})
