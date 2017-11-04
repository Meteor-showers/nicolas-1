<template>
	<div>
		<list-header/>
		<list-suggest/>
		
	</div>
</template>

<script>
import HeaderComponent from "./Header";
import SuggestComponent from "./Suggest";
	export default {
		components: {
		"list-header": HeaderComponent,
		"list-suggest": SuggestComponent
	}
	}

</script>

<style></style>
