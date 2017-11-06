<template>
	<div>
		<palace-header/>
<<<<<<< HEAD
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

=======
		<Recommend-where/>
	</div>
</template>
<script>
	import HeaderComponent from "./Header";
	import RecommendComponent from "./Recommend";
	export default {
		components: {
			"palace-header": HeaderComponent,
		"Recommend-where": RecommendComponent
	  }
   }
</script>
>>>>>>> 759dca03a42c941ec1cba9f27dbafec27c1ae134
<style>

</style>