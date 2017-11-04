<template>
	<div>
		<palace-header/>
		<Ticketype-content/>
	</div>
</template>




<script>
	import HeaderComponent from "./Header";
	import TicketypeComponent from "./Ticketype";


	export default {
		components: {
			"palace-header": HeaderComponent,
			"Ticketype-content": TicketypeComponent
	  }
   }
</script>




<style>

</style>