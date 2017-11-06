<template>
	<div>
		<palace-header/>
		<Recommend-where/>
		<Comment-content/>
		<bottom-content/>
		
	</div>
</template>

<script>
	import HeaderComponent from "./Header";
	import RecommendComponent from "./Recommend";
	import CommentComponent from "./Comment";
	import bottomComponent from "./bottom";
	export default {
		components: {
			"palace-header": HeaderComponent,
			"Comment-content": CommentComponent,
			"bottom-content": bottomComponent,
			"Recommend-where": RecommendComponent
	  }
   }
</script>

<style>
</style>


