<template>
	<div>
		<OneDay-header />
		<spot-filter />
		<oneDay-list />
		<!-- <OneDay-footer /> -->
	</div>

</template>

<script>
import HeaderComponent from "./Header";
import SpotFilterComponent from "./SpotFilter";
import ListComponent from "./oneDayList";
// import FooterComponent from "./Footer";

export default {

	components: {
		"OneDay-header": HeaderComponent,
		"spot-filter": SpotFilterComponent,
		"oneDay-list":ListComponent,
		// "OneDay-footer": FooterComponent
	},
	mounted() {
		if(this.$store.getters.shouldGetData){
			this.$store.dispatch("getOneDayInfo");
		}
	}
}
</script>

<style>
</style>