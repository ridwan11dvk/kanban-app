import Vue from 'vue'
import Vuex from 'vuex'
import task from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allDatas : []
  },
  mutations: {
    FETCH_DATA (state, payload) {
      state.allDatas = payload
    }
  },
  actions: {
    fetchData ({ commit }) {
      task
        .get('/tasks', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          commit('FETCH_DATA', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteHandler ({ dispatch }, payload) {
      task
        .delete(`/tasks/${payload}`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchData')
        })
        .catch(err => {
          console.log(err)
        })
    },
    patchHandler ({ dispatch }, payload) {
      task
        .patch(`/tasks/${payload.id}`, {
          category: payload.category
        }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          dispatch('fetchData')
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
