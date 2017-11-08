<template>
	<div>
 		<home-header/>
 		<swiper-content :swiperInfo="this.$store.state.swiperInfo"/>
 		<index-icon-swiper :IconSwiper="IconSwiper"/>
 		 <Acitivity-view/> 
 		<lazy-content/>
 		<weekend-content  />
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
//import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
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
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
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
	}
}
</script>

<style>
</style>
