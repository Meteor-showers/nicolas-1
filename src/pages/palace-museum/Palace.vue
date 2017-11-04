<template>
	<div>
		<palace-header/>
		<Ticketype-content/>
		<Comment-content/>
		<bottom-content/>
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
			"Ticketype-content": TicketypeComponent,
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent
	  }
   }
</script>

<style>
</style>


