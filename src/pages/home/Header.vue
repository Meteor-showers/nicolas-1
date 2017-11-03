<template>
 	<header class="header">
 		<div class="header-left iconfont icon-back"></div>
 		<div class="header-title">	 		
		 			输入城市/景点/游玩主题		 			
 		</div>
 		<div class="header-right">
	 		<div class="header-city-wrapper">
			 	<span class="header-city">北京</span>
		 	</div>
 		</div>
 	</header>
</template>

<script>
export default {
	
}
</script>

<style>
	.header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
		overflow:hidden;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		position: absolute;
		left: .8rem;
		right: 1.28rem;
		top: .14rem;
		line-height: .6rem;
		background: #fff;
		border-radius: .06rem;
		text-indent: .2rem;
		color: #ccc;
	}
	.header-right {
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-city-wrapper{
		position:relative;		
		padding-right:.3rem;
	}
	.header-city{
		overflow:hidden;
		display:inline-block;
		width:1rem;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.header-city::after{
		content:"\0020";
		position:absolute;
		top:.4rem;
		right:.14rem;
		width:0;
		height:0;
		border-width:.1rem;
		border-style:solid;
		border-color:#fff transparent transparent transparent;
	}
	
</style>
