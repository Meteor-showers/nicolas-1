<template>
	<div>
		<Comment-content/>
		<bottom-content/>
	</div>
</template>

<script>
	
	import CommentComponent from "./Comment";
	import bottomComponent from "./bottom";

	export default {
		components: {
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent,
	  }
   }
</script>

<style>
</style>


