<template>
	<div>
 		<city-search @handleChangeShow='handleChangeShow'/>
 		<city-list v-show='hide' :chooseletter='chooseletter'/>
 		<city-aside v-show='hide' @handleThisLetterForeign='handleThisLetter'/>
 	</div>
</template>

<script>
import ForeignSearch from "./foreign/ForeignSearch";
import ForeignList from "./foreign/ForeignList";
import aside from "./foreign/aside";

export default {
	components: {
		"city-search": ForeignSearch,
		"city-list": ForeignList,
		"city-aside": aside
	},
	data(){
		return {
			hide:true,
			chooseletter:''
		}
	},
	methods: {
		handleChangeShow(e){
			this.hide = !e.hide;
		},
		handleThisLetter(e){
			this.chooseletter=e.chooseletter;
		}
	}
}
</script>


<style>

</style>
