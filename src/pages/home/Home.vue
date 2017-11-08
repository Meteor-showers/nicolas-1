<!--<template>
	<div>
<<<<<<< HEAD
 		<home-header/>
 		<swiper-content/>
 		<index-icon-swiper/>
 		 <Acitivity-view/> 
 		
 		<lazy-content/>
 		<weekend-content  />
=======
 		<home-header />
 		<swiper-content />
 		<index-icon-swiper />
 		<Acitivity-view />
 		<index-hotsale />
 		<week-content />
>>>>>>> 3f0ae906b9af9e3d4760d0ad1dcef71b8da4b40e
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
//import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
<<<<<<< HEAD
import LazyComponent from "./components/Lazy";
import WeekendComponent from "./components/Weekend";
import axios from 'axios';
export default {
	data() {
		return {
			acitivityInfo: []
		}
	},
	
import LazyComponent from "./components/Lazy";
import WeekendComponent from "./components/Weekend";

export default {
	
import axios from "axios";

export default {
	data() {
		return {
			IconSwiper: []
		}
	},
=======
import Recommend from "./components/RecommendList";
import WeekComponent from "./components/Week";
import axios from 'axios';

export default {
	
>>>>>>> 3f0ae906b9af9e3d4760d0ad1dcef71b8da4b40e
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
<<<<<<< HEAD
		// "Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"weekend-content": WeekendComponent
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
		if(this.$store.getters.shouldGetData){
			this.$store.dispatch("getIndexInfo");
		}
		this.getHomeData();
		this.$store.dispatch("getSwiperInfo");
=======
		"Acitivity-view": ActivityComponent,
		"index-hotsale": Recommend,
		"week-content": WeekComponent
	},
	
	mounted() {
		if (this.$store.getters.shouldGetData) {
		this.$store.dispatch("getIndexInfo");
			
		}
>>>>>>> 3f0ae906b9af9e3d4760d0ad1dcef71b8da4b40e
	}
}
</script>

<style>
</style>-->
