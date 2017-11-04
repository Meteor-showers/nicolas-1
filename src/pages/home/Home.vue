<template>
	<div>
 		<home-header/>
 		<swiper-content/>
<<<<<<< HEAD
 		<navigation/>
=======
 		<navigaition/>
 		<Acitivity-view/>
 		<lazy-content/>
 		<week-content/>
>>>>>>> 20171103-nicolas-1-1
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
<<<<<<< HEAD
import NavigationComponent from "./Navigation";
=======
import NavigationComponent from "./Navigation"
import ActivityComponent from "./activity";
import LazyComponent from "./Lazy";
import WeekComponent from "./Week";
>>>>>>> 20171103-nicolas-1-1

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
<<<<<<< HEAD
		"navigation": NavigationComponent,
=======
		"navigaition":NavigationComponent,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent,
		"week-content": WeekComponent
>>>>>>> 20171103-nicolas-1-1
	}
}
</script>

<style>
</style>
