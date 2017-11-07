<template>
	<div>
 		<home-header/>
 		<swiper-content :swiperInfo="swiperInfo"/>
 		<index-icon-swiper :IconSwiper="IconSwiper"/>
 		<Acitivity-view/>
 		<lazy-content/>
 		<weekend-content  />
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
import LazyComponent from "./components/Lazy";
import WeekendComponent from "./components/Weekend";

export default {
	
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"weekend-content": WeekendComponent
	},
	
	mounted(){
		if(this.$store.getters.shouldGetData){
			this.$store.dispatch("getIndexInfo");
		}
	}
}
</script>

<style>
</style>
