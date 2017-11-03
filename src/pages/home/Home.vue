<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<navigaition/>
 		<Acitivity-view/>

 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import NavigationComponent from "./Navigation"
import ActivityComponent from "./activity";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"navigaition":NavigationComponent,
		"Acitivity-view": ActivityComponent
	}
}
</script>

<style>
</style>
