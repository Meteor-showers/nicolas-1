<template>
 	<header class="header">
 		<div class="header-left iconfont icon-back"></div>
 		<div class="header-title">
		 	<div class="search-title">
		 		<input class="search-title-input" id="search-input-bind" type="text" placeholder="输入城市或景点">
		 	</div>
 		</div>
 		<div class="header-right">
	 		<div class="header-city-wrapper">
			 	<span class="header-search">搜索</span>
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
	    width: 100%;
	    height: .88rem;
	    background: #00bcd4;
	    overflow: hidden;
	    text-align: center;
	    color: #fff;
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
	.search-title-input{
		position: relative;
		display: block;
		width: 98%;
		height: .4rem;
		line-height: .4rem;
		padding: .1rem 0rem .1rem .2rem;
		border:0;
		/*font-family: "Microsoft Yahei",Arial";*/
		font-weight: bold;
		font-size:.28rem;
		border-radius: .06rem;
	}
	.header-right {
		float: right;
		width: 1.28rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
</style>
