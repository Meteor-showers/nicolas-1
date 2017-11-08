<template>
	<div>
 		<home-header />
 		<swiper-content />
 		<index-icon-swiper />
 		<Acitivity-view />
 		<index-hotsale />
 		<week-content />
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
import Recommend from "./components/RecommendList";
import WeekComponent from "./components/Week";
import axios from 'axios';
export default {
	data() {
		return {
			acitivityInfo: [],
			IconSwiper: []
		}
	},
	

	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
		"Acitivity-view": ActivityComponent,
		"index-hotsale": Recommend,
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

	},
	methods: {
		getHomeData() {
			axios.get('/static/index.json')
			.then(this.handleGetDataSucc.bind(this))
			.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc(response) {
			if(response.status == 200){
				const {data} = response.data;
				this.swiperInfo = data.swiperInfo;
				this.IconSwiper = data.IconSwiper;
				this.RecommendList = data.RecommendList;
			}
		},
		handleGetDataErr(error) {

		}
	},
	mounted(){
		this.getHomeData();
		this.$store.dispatch("getSwiperInfo");
	}
}
</script>

<style>
</style>
