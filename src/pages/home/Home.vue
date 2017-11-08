<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<index-icon-swiper/>
 		<Acitivity-view :acitivityInfo="acitivityInfo"/>
 		<lazy-content/>
 		<week-content/>
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
import LazyComponent from "./components/Lazy";
import WeekComponent from "./components/Week";
import axios from 'axios';
export default {
	data() {
		return {
			acitivityInfo: []
		}
	},
	
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"week-content": WeekComponent
	},
	methods: {
		
		getHomeData() {
			axios.get('/static/index.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc(response) {
			if (response.status === 200) {
				this.acitivityInfo = response.data.data.acitivityInfo;
			}
		},
		handleGetDataErr(err) {
			console.log(err);
		}
	},
	mounted() {
		this.getHomeData();

	}
}
</script>

<style>
</style>
