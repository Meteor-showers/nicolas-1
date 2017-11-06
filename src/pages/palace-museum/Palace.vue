<template>
	<div>
		<palace-header/>
		<Comment-content/>
		<bottom-content/>
		
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import CommentComponent from "./Comment";
	import bottomComponent from "./bottom";
	export default {
		components: {
			"palace-header": HeaderComponent,
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent

	  }
   }
</script>

<style>
</style>


