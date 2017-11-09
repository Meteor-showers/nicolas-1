<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<index-icon-swiper/>
 		<!--<Acitivity-view />-->
 		<index-hotsale />
 		<weekend-content  />
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
//import ActivityComponent from "./components/activity";
import Recommend from "./components/RecommendList";
import WeekendComponent from "./components/Weekend";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
//		"Acitivity-view": ActivityComponent,
		"index-hotsale":Recommend,
		"weekend-content": WeekendComponent
	},
	
	mounted() {
		if (this.$store.getters.shouldGetData) {
		this.$store.dispatch("getIndexInfo");
			
		}
	}
}
</script>

<style>
</style>
