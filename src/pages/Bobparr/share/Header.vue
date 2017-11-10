<template>
		<div class="bobparr-header">
			<i class="iconfont header-icon">&#xe6ad;</i>
			<input class="header-input" placeholder="一日游"></input>
			<i class="header-search">搜索</i>
		</div>
</template>
<script>
	
</script>
<style>
	.bobparr-header{
		position:relative;
		height:.8rem;
		background:#00BCD4;
		overflow: hidden;
		margin:0 auto;
		
	}
	.header-icon{
		position:absolute;
		top:.2rem;
		left:0rem;
		bottom:0rem;
		width:10%;
		text-align: center;
		padding-top:0rem;
		font-size:22px;
		font-weight: 700;
		color: #FFFFFF;
		}
	.header-input{
		height:60%;
		width:67%;
		margin-left:1rem;
		margin-right:1rem;
		margin-top:.15rem;
		font-size:0.25rem;
		border:none;
		border-radius:0.05rem;
	}
	.header-search{
		position:absolute;
		top:.25rem;
		right:.3rem;
		bottom:0rem;
		width:10%;
		text-align: center;
		font-size:0.3rem;
		color:#FFFFFF;
	}
</style>