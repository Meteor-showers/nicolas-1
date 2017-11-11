<template>
	<div>
 		<home-header/>

 		<swiper-content/>
<<<<<<< HEAD
 		<navigation/>
 		<Acitivity-view/>
 		<lazy-content/>
 		<week-content/>
=======
 		<index-icon-swiper/>
 		<Acitivity-view />
 		<index-hotsale />
 		<weekend-content  />

>>>>>>> 20171103-nicolas-1-1
 	</div>
</template>

<script>
<<<<<<< HEAD
import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import NavigationComponent from "./Navigation";
import ActivityComponent from "./activity";
import LazyComponent from "./Lazy";
import WeekComponent from "./Week";
=======
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";

import ActivityComponent from "./components/activity";
import Recommend from "./components/RecommendList";
import WeekendComponent from "./components/Weekend";
import axios from "axios";
>>>>>>> 20171103-nicolas-1-1

export default {

	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
<<<<<<< HEAD
		"navigation": NavigationComponent,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"week-content": WeekComponent
=======
		"index-icon-swiper":IconSwiper,
		"Acitivity-view": ActivityComponent,
		"index-hotsale":Recommend,
		"weekend-content": WeekendComponent
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

//		"Acitivity-view": ActivityComponent,

		

	},
	
	mounted() {

		if (this.$store.getters.shouldGetData) {
		this.$store.dispatch("getIndexInfo");
			
		}
>>>>>>> 20171103-nicolas-1-1

	}
}
	
	
</script>

<style>
</style>
