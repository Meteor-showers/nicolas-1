import axios from 'axios'
export  default{
	state:{
		onedayInfo:[]
	},
	actions:{
		getOneDayInfo(context){
			axios.get('/static/oneDay.json')
			.then((response)=>{
				if(response.status===200){
					const{data}=response.data;
					//console.log(data.onedayInfo)
					context.commit("changeOneDayInfo",data.onedayInfo)
				}
			})
		}
	},
	mutations:{
		changeOneDayInfo(state,data) {
			state.onedayInfo=data
		},
		refreshInfo(state,data){
			state.onedayInfo.push(...state.onedayInfo);
		}
	},
	getters:{
		shouldGetData(state){
			if(!state.onedayInfo.length){
				return true
			}else{
				return false
			}
		}
	}
}