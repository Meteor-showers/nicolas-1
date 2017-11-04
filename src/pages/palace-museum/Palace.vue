<template>
	<div>
		<palace-header/>
		<Comment-content/>
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import CommentComponent from "./Comment";

	export default {
		components: {
			"palace-header": HeaderComponent,
			"Comment-content": CommentComponent
	  }
   }
</script>

<style>
</style>


