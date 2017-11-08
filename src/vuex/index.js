import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home:home
	}
//import axios from "axios"
//Vue.use(Vuex);
//
//export default new Vuex.Store({
//	state: {
//		swiperInfo: []
//	},
//	actions: {
//		getSwiperInfo(context) {
//			axios.get('/static/index.json')
//			.then((response) => {
//				if (response.status === 200) {
//				const {data} = response.data;
//				//想办法让mutations里的changeSwiperInfo方法执行
//				context.commit("changeSwiperInfo",data.swiperInfo);
//				}
//			})
//		}
//	},
//	mutations: {
//		changeSwiperInfo(state,data) {
//			state.swiperInfo = data
//		}
//	},
//	getters: {}
})