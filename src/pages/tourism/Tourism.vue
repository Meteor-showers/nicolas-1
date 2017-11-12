<template>
	<div>
 		<tourism-header />
 		<tourism-tag />
 		<tourism-main />
 		<tourism-price />
 		<tourism-guide />
 		<tourism-comments />
 		<tourism-qchat />
 		<tourism-add />
 		<tourism-choose />
 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import ItineraryComponent from "./components/Itinerary";
import BirthlandComponent from "./components/Birthland";
import PricedetailComponent from "./components/Pricedetail";
import GuideComponent from "./components/Guide";
import CommentsComponent from "./components/Comments";
import QchatComponent from "./components/Qchat";
import addComponent from "./components/add";
import chooseComponent from "./components/choose";

export default {
	components: {
		"tourism-header": HeaderComponent,
		"tourism-tag": ItineraryComponent,
		"tourism-main": BirthlandComponent,
		"tourism-price": PricedetailComponent,
		"tourism-guide": GuideComponent,
		"tourism-comments": CommentsComponent,
		"tourism-qchat": QchatComponent,
		"tourism-add": addComponent,
		"tourism-choose": chooseComponent
	}
}
</script>

<style>
</style>
