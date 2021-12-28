import { getMentorRecommendAll } from "@/service/mentor";

export const mentor = {
	namespaced: true,
	state: {
		mentors: []
	},
	mutation: {
		updateMentorRecommendAll(state, value) {
			state.mentors = value;
		}
	},
	action : {
		async getMentorRecommendAll({ commit }) {
			try {
				const response = await getMentorRecommendAll();
				commit("updateMentorRecommendAll", response.data);
			} catch(error) {
				alert("エラーが発生しました");
				commit("updateMentorRecommendAll", [])
			}
		}
	}
}
