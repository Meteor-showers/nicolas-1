<template>
	<div>
 		<home-header/>
<<<<<<< HEAD

 		<swiper-content/>
 		<index-icon-swiper/>
 		<swiper-content :swiperInfo="this.$store.state.swiperInfo"/>
 		<index-icon-swiper :IconSwiper="IconSwiper"/>
 		<Acitivity-view :acitivityInfo="acitivityInfo"/>

 		<!--<lazy-content/>
 		 <week-content/> -->
=======
 		<swiper-content/>
 		<index-icon-swiper/>
 		<!--<Acitivity-view />-->
 		<index-hotsale />
 		<weekend-content  />
>>>>>>> b599ab63a8fdc0c65a7db68cd7133ec9b6d71903
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
<<<<<<< HEAD

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


=======
//import ActivityComponent from "./components/activity";
import Recommend from "./components/RecommendList";
import WeekendComponent from "./components/Weekend";

export default {
>>>>>>> b599ab63a8fdc0c65a7db68cd7133ec9b6d71903
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
<<<<<<< HEAD
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
=======
//		"Acitivity-view": ActivityComponent,
		"index-hotsale":Recommend,
		"weekend-content": WeekendComponent
>>>>>>> b599ab63a8fdc0c65a7db68cd7133ec9b6d71903
	},
	
	mounted() {
<<<<<<< HEAD
		this.getHomeData();
		this.getHomeData();
		this.$store.dispatch("getSwiperInfo");


//		 "week-content": WeekComponent
=======
		if (this.$store.getters.shouldGetData) {
		this.$store.dispatch("getIndexInfo");
			
		}
>>>>>>> b599ab63a8fdc0c65a7db68cd7133ec9b6d71903
	}
}
	
	
</script>

<style>
</style>
