import Vuex from 'vuex'
import axios from 'axios'

export default () => new Vuex.Store({
  state: {
    mentors:[]
  },
  getters: {
    mentors: (state) => state.mentors
  },
  mutations: {
    setMentors (state, { mentors }) {
      state.mentors = mentors
    }
  },
  actions: {
    async fetchMentors({ commit }) {
      await axios.get('api/public/mentor_recommend',{
        params: {
          offset: 4,
          limit: 3
        }
      }).then((response) => {
          commit('setMentors', { mentors: response.data })
      }).catch((error) => {
        console.log(error.message);
      })
    }
  }
})
