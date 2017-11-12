<template>
 	<div class="fixbooking-con flexbox">
 		<div class="fixbooking-qchat border-topleft">
 			<div class="iconfont qchat-icon icon-kefu"></div>
 			<div class="qchat-text">咨询</div>
 		</div>
 		<div class="fixbooking-btn flexbox-item">立即预定</div>
 	</div>
 </template>
 
<script>
	export default {
 		
 	}
</script>

<style>
	.fixbooking-con{
		position: fixed;
	    z-index: 82;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    height: .98rem;
	    line-height: .98rem;
	}
	.flexbox{
		display:flex;
	}
	.fixbooking-qchat{
		float: left;
	    padding: .16rem 0 .06rem;
	    width: 1.02rem;
	    background: #fff;
	    color: #616161;
	    text-align: center;
	}
	.border-topleft{
		    position: relative;
	}
	.qchat-icon{
		position: relative;
	    top: -.02rem;
	    height: .4rem;
	    font-size: .4rem;
	    line-height: .4rem;
	}
	.iconfont{
		speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	}
	.qchat-text{
		 height: .28rem;
	    font-size: .2rem;
	    line-height: .28rem;
	}
	.fixbooking-btn {
		 overflow: hidden;
	    height: .98rem;
	    background: #ff9800;
	    color: #fff;
	    font-size: .4rem;
	    text-align: center;
	}
	.flexbox-item{
		flex:1;
	}
</style>