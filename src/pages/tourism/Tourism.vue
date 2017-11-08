<template>
	<div>
 		<tourism-header />
 		<tourism-main />
 	</div>
</template>

<script>

import HeaderComponent from "./components/Header";
import ItineraryComponent from "./components/Itinerary";

export default {
	components: {
		"tourism-header": HeaderComponent,
		"tourism-main": ItineraryComponent
	}
}
</script>

<style>
</style>
