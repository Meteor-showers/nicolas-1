<template>
	<div>
		<palace-header/>
		<Recommend-where/>
	</div>
</template>
<script>
	import HeaderComponent from "./Header";
	import RecommendComponent from "./Recommend";
	export default {
		components: {
			"palace-header": HeaderComponent,
		"Recommend-where": RecommendComponent
	  }
   }
</script>
<style>

</style>