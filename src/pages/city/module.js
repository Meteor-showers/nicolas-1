import axios from 'axios'

export default {
	state: {
		chinacity: [],
		foreigncity:[],
		hotChinacity: [],
		hotforeigcity: []
	},
	actions: {
		getCityInfo(context){
			axios.get('static/city.json')
			.then((res) => {
				if(res.status == 200 ){
					const {data} =res;
					context.commit('changeCityInfo',data);
				}
			})
		}
	},
	mutations: {
		changeCityInfo: (state,data) => {
			state.chinacity = data.china;
			state.foreigncity = data.abroad;
			state.hotChinacity = data.hotcity;
			state.hotforeigcity = data.hotcityAbroad;
		}
	},
	getters: {
		shouldCityData(state){
			if(!state.chinacity.length &&
			   !state.foreigncity.length &&
			   !state.hotChinacity.length &&
			   !state.hotforeigcity.length){
			   	return true;
			 }else{
			 	return false;
			 }
		}
	}
}
