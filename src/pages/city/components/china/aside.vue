<template>
	<div>
		<div class="citys-aside-letter" ref='cityAside'  @touchstart="handleIndexTouch">
			<span v-for="letter in chinacity" :key="letter[0]" :ref="letter[0]">{{letter[0]}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		
		data(){
			return {
			}
		},
		computed: {
			chinacity(){
				return this.$store.state.city.chinacity;
			}
		},
		methods: {
			handleIndexTouch(e){
				var letterposition=parseInt((e.touches[0].clientY-e.path[1].offsetTop)/this.$refs.A[0].clientHeight);
				this.$emit('handleChooseLetter',letterposition);
				document.addEventListener("touchmove",this.handleMoveTouch, false);
        		document.addEventListener("touchend",this.handleMoveEnd, false)
			},
			handleMoveTouch(e){
				var letterposition1=parseInt((e.touches[0].clientY-e.path[1].offsetTop)/this.$refs.A[0].clientHeight);
				if(letterposition1<=0){
					var letterposition=0;
				}
				else if(letterposition1<21 && letterposition1>0){
					var letterposition=letterposition1;
				}else if(letterposition1>=21){
					var letterposition=21;
				}
				this.$emit('handleChooseLetter',letterposition);					
				
			},
			handleMoveEnd() {
        		document.removeEventListener("touchmove", this.handleMoveTouch);
        		document.removeEventListener("touchend", this.handleMoveEnd);
        	}
		}
	}
</script>

<style>
</style>