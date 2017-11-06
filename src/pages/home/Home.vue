<template>
	<div>
 		<home-header/>
 		<swiper-content :swiperInfo="swiperInfo"/>
 		<index-icon-swiper :IconSwiper="IconSwiper"/>
 		<Acitivity-view/>
 		<lazy-content/>
 		<week-content/>
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper"
import ActivityComponent from "./components/activity";
import LazyComponent from "./components/Lazy";
import WeekComponent from "./components/Week";
import axios from "axios";

export default {
	data() {
		return {
			swiperInfo: [],
			IconSwiper: []
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
		getHomeData(){
			axios.get('/static/index.json')
			.then(this.handleGetDataSucc.bind(this))
			.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc(response) {
			if (response.status === 200) {
				const {data} = response.data;
				this.swiperInfo = data.swiperInfo;
				this.IconSwiper = data.IconSwiper;
			}
		},
		handleGetDataErr(error) {
			console.log(error);
		}
	},
	mounted(){
		this.getHomeData();
	}
}
</script>

<style>
</style>
