<template>
	<div>
		<div class="header-container">
			<div class="ico iconfont icon-fanhui"></div>
			<router-link to="/palace-museum/Pic">
				<div class="header-wrap">
					<img class="img-con" src="./img/museum1.jpg">
				</div>
			</router-link>
			<div class="content">
				<div class="content-title">
					故宫（AAAAA景区）
				</div>
				<div class="content-num">
					<span class="chk"></span>
					<em class="num iconfont">10</em>
				</div>			
			</div>
		</div>
		<div class="infor">
			<div class="location">
				<p>
					<span class="chk"></span>
					北京市东城区景山前街4号
				</p>
			</div>
			<div class="intro">
				<p>
					<span class="chk"></span>
					查看景点简介及开放时间
				</p>
			</div>
		</div>
		<div class="comments">
			<b class="grade">BBBBB</b>
			<b class="grade">5.0分</b>
			<i class="commentwords">144438评论</i>
		</div>
		<div class="announce">
			<p>
				<span class="con iconfont icon-laba"></span>
				因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
			</p>
		</div>
	</div>	
</template>


<script>

	




</script>


<style>
	.ico{
		position: absolute;
		width: .6rem;
		height: .6rem;
		left: 0rem;
		top: 0rem;
		border-radius: .3rem;
		z-index: 1;
	}
	.icon-fanhui{
		text-align: center;
		line-height: .6rem;
		color: #fff;
	}
	.header-container{
		position: relative;
	}
	.header-wrap{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 55%;
		
	}
	.img-con{
		width: 100%;
		height: 4.125rem;
		position: absolute;
	}
	.content{
		position: absolute;
		right: .2rem;
		bottom: .2rem;
		height: .4rem;
		left: .2rem;
		overflow: hidden;
		box-sizing: border;
	}
	.content-title{
		float: left;
		margin-right: 1.4rem;
		line-height: .4rem;
		color: #fff;
		font-size: .32rem;
	}
	.chk{
		width: .15rem;
		height: .15rem;
		display: inline-block;
		border: .01rem solid gray;
	}
	.content-num{
		float: right;
		width: 1.2rem;
		height: .4rem;
		border-radius: .2rem;
		color: #fff;
		background: rgba(0,0,0,.5);
		text-align: center;
		right: 0rem;
		font-size: .20rem;
	}
	.infor{
		position: relative;
		top: -.1rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .1rem;
		border-radius: .1rem .1rem 0 0;
		background: #fff;
	}
	.infor .chk{
		margin-right: .1rem;
	}
	.location{
		height: .88rem;
		line-height: .88rem;
	}
	.intro{
		height: .88rem;
		line-height: .88rem;
	}
	.comments{
		margin-bottom: .2rem;
		height: .8rem;
		line-height: .8rem;
		background-color: #fff;
	}
	.comments .grade{
		padding: 0 .2rem;
		color: #00bcd4;
	}
	.comments .commentwords{
		display: block;
		float: right;
		margin-right: .2rem;
	}
	.announce{
		background: #fdeede;
		color: #f1441a;
		margin-bottom: .2rem;
		padding-left: .23rem;
		height: .88rem;
		line-height: .88rem;
		width: 100%;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>