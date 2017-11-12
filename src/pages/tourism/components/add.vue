<template>	
	<a  href="#" class="header-back mpg-iconfont">
 		<span class="headerback-bg"></span>
 		<span class="headerback-icon iconfont icon-zuo"></span>
 	</a>
</template>
 
<script>
	export default {}
</script>

<style>
	.header-back{
	left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;
	} 
	.headerback-bg{
	display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    opacity: .5;
    border-radius: .36rem;
	}
	.headerback-icon{
	position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: .72rem;
    line-height: .72rem;
    text-align: left;
    text-indent: .24rem;
    color:#fff;
	}
</style>