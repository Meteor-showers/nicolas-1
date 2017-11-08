<template>
	<div>
 		<home-header/>
<<<<<<< HEAD
 		<swiper-content/>
 		<index-icon-swiper/>
 		<Acitivity-view :acitivityInfo="acitivityInfo"/>
=======
 		<swiper-content :swiperInfo="this.$store.state.swiperInfo"/>
 		<index-icon-swiper :IconSwiper="IconSwiper"/>
 		<!-- <Acitivity-view/> -->
>>>>>>> 4fb2ef90a124d23115a40e7bb53790ae22033fe0
 		<lazy-content/>
 		<!-- <week-content/> -->
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
<<<<<<< HEAD
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
	
=======
// import ActivityComponent from "./components/activity";
import LazyComponent from "./components/Lazy";
// import WeekComponent from "./components/Week";
import axios from "axios";

export default {
	data() {
		return {
			IconSwiper: []
		}
	},
>>>>>>> 4fb2ef90a124d23115a40e7bb53790ae22033fe0
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
		// "Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
<<<<<<< HEAD
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

=======
		// "week-content": WeekComponent
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
			}
		},
		handleGetDataErr(error) {

		}
	},
	mounted(){
		this.getHomeData();
		this.$store.dispatch("getSwiperInfo");
>>>>>>> 4fb2ef90a124d23115a40e7bb53790ae22033fe0
	}
}
</script>

<style>
</style>
