import axios from "axios"
export default {
	state:{
			swiperInfo: [],
			IconSwiper: [],
			weekendInfo: []
	},
	actions:{
		getIndexInfo(context){
		axios.get('/static/index.json')
		.then((response)=>{
			if (response.status === 200) {
				const {data} = response.data;
				context.commit("changeIndexInfo",data);
			}
		})
		}
	},
	mutations:{
		changeIndexInfo(state,data){
			state.weekendInfo=data.weekendInfo;
		},
	},
	getters:{
		shouldGetData(state){
			if(!state.weekendInfo.length){
				return true
			}else{
				return false;
			}
		}
	}
}