<template>
	<div>
		<div class="city-header">
	 		<div class="city-header-left iconfont icon-fanhui" @click="handleReturn"></div>
	 		<div class="city-header-title" @click="handleClickChoose">
	 			<span :class="[isActive?'city-header-title-active':'']">国内</span>
	 			<span :class="[isActive?'':'city-header-title-active']">国外</span>
	 		</div>
 		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				isActive:true
      		} 
    	},
    	methods: {
    		handleClickChoose: function(e){
    			var target = e.target;
    			if(target.innerText == '国内'){
    				this.show = true;
    				this.isActive=true;
    			}else{
    				this.show = false;
    				this.isActive=false;
    			}
    			var show = this.show;
    			this.$emit('handleChange',{
    				show:show
    			})
    		},
    		handleReturn: function(){
    			this.$router.go(-1);
    		}
    	}
	}
</script>

<style>
</style>