<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<navigation/>
 		<Acitivity-view/>
 		<lazy-content/>
 		<week-content/>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import NavigationComponent from "./Navigation";
import ActivityComponent from "./activity";
import LazyComponent from "./Lazy";
import WeekComponent from "./Week";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"navigation": NavigationComponent,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"week-content": WeekComponent

	}
}
</script>

<style>
</style>
