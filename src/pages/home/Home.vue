<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<index-icon-swiper/>
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

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"week-content": WeekComponent
	},
	mounted(){
		// fetch('/users.html')
		//   .then(function(response) {
		//     return response.text()
		//   }).then(function(body) {
		//     document.body.innerHTML = body
		//   })
	}
}
</script>

<style>
</style>
