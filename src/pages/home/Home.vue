<template>
	<div>
 		<home-header/>

 		<swiper-content/>
 		<index-icon-swiper/>
 		<swiper-content :swiperInfo="this.$store.state.swiperInfo"/>
 		<index-icon-swiper :IconSwiper="IconSwiper"/>
 		<Acitivity-view :acitivityInfo="acitivityInfo"/>

 		<!--<lazy-content/>
 		 <week-content/> -->
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";

import ActivityComponent from "./components/activity";
//import LazyComponent from "./components/Lazy";
//import WeekComponent from "./components/Week";
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
		 "Acitivity-view": ActivityComponent
//		"lazy-content": LazyComponent,

//		"week-content": WeekComponent
	},
	methods: {
		
		getHomeData() {
			axios.get('/static/index.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc(response) {
			if (response.status === 200) {
				const {data} = response.data;
				this.swiperInfo = data.swiperInfo;
				this.IconSwiper = data.IconSwiper;
				this.acitivityInfo = data.acitivityInfo;
			}
		},
		handleGetDataErr(err) {
			console.log(err);
		}
	},
	mounted() {
		this.getHomeData();
		this.getHomeData();
		this.$store.dispatch("getSwiperInfo");


//		 "week-content": WeekComponent
	}
}
	
	
</script>

<style>
</style>
