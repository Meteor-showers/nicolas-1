<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<lazy-content/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import LazyComponent from "./Lazy";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"lazy-content": LazyComponent
	}
}
</script>

<style>
</style>
