<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<navigation/>
 	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import NavigationComponent from "./Navigation";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"navigation": NavigationComponent
	}
}
</script>

<style>
</style>
