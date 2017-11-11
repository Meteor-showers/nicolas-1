<template>
	<div>
 		<city-search @handleChangeShow='handleChangeShow' />
 		<city-list v-show='hide' :chooseletter='chooseletter'/>
 		<city-aside v-show='hide' @handleChooseLetter='handleChooseLetter'/>
 	</div>
</template>

<script>
import DomesticSearch from "./china/DomesticSearch";
import DomesticList from "./china/DomesticList";
import aside from "./china/aside";

export default {
	components: {
		"city-search": DomesticSearch,
		"city-list": DomesticList,
		"city-aside": aside
	},
	data(){
		return {
			hide:true,
			chooseletter:'',
			Letterarr:[]
		}
	},
	methods: {
		handleChangeShow(e){
			this.hide = !e.hide;
		},
		handleChooseLetter(chooseletter){
			this.chooseletter=chooseletter;
		}
	}
}
</script>


<style>

</style>
