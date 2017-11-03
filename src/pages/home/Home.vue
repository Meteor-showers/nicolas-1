<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<navigaition/>
 		<Acitivity-view/>
 		<lazy-content/>

 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import NavigationComponent from "./Navigation"
import ActivityComponent from "./activity";
import LazyComponent from "./Lazy";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"navigaition":NavigationComponent,
		"Acitivity-view": ActivityComponent,
		"lazy-content": LazyComponent
	}
}
</script>

<style>
</style>
