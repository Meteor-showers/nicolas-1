import Vue from 'vue'
import Vuex from 'vuex'
import home from '../pages/home/module.js'
import domestic from "../pages/city/components/domestic-module.js"
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		domestic: domestic
	}
})
