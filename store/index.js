import axios from 'axios'
import { getMentorRecommendAll } from "@/service/mentor";

export const state = () => ({
  mentors: []
})

export const getters = {
  mentors (state) {
    return state.mentors
  }
}
export const mutations = {
	updateMentorRecommendAll(state, value) {
		state.mentors = value;
	}
}

export const actions = {
	async getMentorRecommendAll({ commit }) {
		try {
      const response = await axios.get('/api/public/mentor_recommend')
			commit("updateMentorRecommendAll", response.data.mentor_list);
		} catch(error) {
			alert("エラーが発生しました");
			commit("updateMentorRecommendAll", [])
		}
	}
}
