<template>
	<div>
		<Comment-content/>
		<bottom-content/>
		<palace-header/>
	</div>
</template>

<script>
	import CommentComponent from "./Comment";
	import bottomComponent from "./bottom";
	import HeaderComponent from "./Header";
	export default {
		components: {
			"palace-header": HeaderComponent,
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent,

	  }
   }
</script>

<style>
</style>


