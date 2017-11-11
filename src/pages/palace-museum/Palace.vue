<template>
	<div>
		<palace-header/>
		<Recommend-where/>
		<Ticketype-content/>
		<Comment-content/>
		<bottom-content/>		
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import RecommendComponent from "./Recommend";
	import TicketypeComponent from "./Ticketype";
	import CommentComponent from "./Comment";
	import bottomComponent from "./bottom";
	
	export default {
		components: {
			"palace-header": HeaderComponent,
			"Recommend-where": RecommendComponent,
			"Ticketype-content": TicketypeComponent,
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent
	  }
   }
</script>

<style>
</style>


