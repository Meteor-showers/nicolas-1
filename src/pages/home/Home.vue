<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<week-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import WeekComponent from "./Week";
export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"week-content": WeekComponent
	}
}
</script>

<style>
</style>
