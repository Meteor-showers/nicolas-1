import axios from 'axios'

export default {
	state: {
		swiperInfo: [],
		recommendInfo:[],
		weekendInfo: []
	},
	actions: {
		getIndexInfo(context) {
			axios.get('/static/index.json')
				.then((response) => {
					if (response.status === 200) {
						const {data}  = response.data;
						context.commit("changeIndexInfo", data);
					}
				})
		}
	},
	mutations: {
		changeIndexInfo(state, data) {
			state.swiperInfo = data.swiperInfo;
			state.weekendInfo = data.weekendInfo;
			state.recommendInfo = data.recommendInfo;
		},
	},
	getters: {
		shouldGetData(state) {
			if (!state.swiperInfo.length &&
				!state.weekendInfo.length &&
				!state.recommendInfo.length) {
				return true
			}else {
				return false;
			}
		}
	}
}