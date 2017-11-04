<template>
	<div>
		<Comment-content/>
		<bottom-content/>
		<palace-header/>
		<Ticketype-content/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import TicketypeComponent from "./Ticketype";
	import CommentComponent from "./Comment";
	import bottomComponent from "./bottom";

	export default {
		components: {
			"palace-header": HeaderComponent,
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent,
			"Ticketype-content": TicketypeComponent
	  }
   }
</script>

<style>
</style>


