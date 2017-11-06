<template>
	<div class="week-list">
		<h2 class="week-list-title">周末去哪儿</h2>
		<div >
			<div class="week-list-con">
		 		<img class="week-list-img" src="../img/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg">
		 	</div>
		 		<div class="week-list-info">
			 		<p class="week-list-name">北京温泉排行榜</p>
			 		<p class="week-list-desc">细数北京温泉,温暖你的冬天</p>
		 		</div>
	 		
	 		<div class="week-list-con">
		 		<img class="week-list-img" src="../img/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" />
		 		</div>
		 		<div class="week-list-info">
			 		<p class="week-list-name">寻找北京的皇城范儿</p>
			 		<p class="week-list-desc">数百年的宫廷庙宇,至今依旧威严霸气</p>
		 		</div>
	 		
	 		<div class="week-list-con">
		 		<img class="week-list-img" src="../img/7baaf8a851d221.jpg_r_640x214_1431200f.jpg">
		 		</div>
		 		<div class="week-list-info">
			 		<p class="week-list-name">北京必游top10</p>
			 		<p class="week-list-desc">来北京必去的地方非这些地方莫属</p>
		 		</div>
	 		
	 		<div class="week-list-con">
		 		<img class="week-list-img" src="../img/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg">
		 	</div>
		 		<div class="week-list-info">
			 		<p class="week-list-name">登高望远秋色佳</p>
			 		<p class="week-list-desc">山顶满眼彩色,此情此景醉了</p>
		 		</div>
	 		
	 		<div class="week-list-con">
		 		<img class="week-list-img" src="../img/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg">
		 		</div>
		 		<div class="week-list-info">
			 		<p class="week-list-name">秋高气爽去礼佛</p>
			 		<p class="week-list-desc">秋风伴着美妙经声,品尝秋的另一番滋味</p>
		 		</div>
	 		</div>
 		</div>
 	
</template>
<script>
	export default {
	
	}
</script>

<style>
	.week-list{
		background:#f2f2f2;
	}
	.week-list-title{ 
		height: .8rem;
    	padding-left: .26rem;
    	line-height: .8rem;
    	color: #212121;
    	white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.week-list-con{
	    overflow: hidden;
    	height: 0;
    	padding-bottom: 37.4375%;
	}
	.week-list-img{
		display:block;
    	width: 100%;
    	background:#fff;
    	vertical-align: middle;
    	transition: opacity 400ms;
	}
	.week-list-info{
		position:relative;
		background:#fff;
		padding:.14rem .2rem .2rem .2rem;
	}
	.week-list-name{
		overflow: hidden;
		padding-right:1.4rem;
		color: #212121;
		font-size: .28rem;
		line-height: .48rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
	 .week-list-desc {
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .42rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	 }   
</style>
