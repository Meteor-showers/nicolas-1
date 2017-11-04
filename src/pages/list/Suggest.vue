<template>
	<div class="Suggest" style="<!-- display: none; --> top: 37px; background: white">
		<div class="suggest-history">
			<span class="search">热门搜索</span>
			<span class="qiehuan">
				<span class="iconfont icon-refresh"></span>
				<span>换一批</span>
			</span>
		</div>
		<div class="mp-hotsearch-con">
			<div class="mp-hotsearch-group">
				<div class="mp-hotsearch-typecon">
					<div class="mp-hotsearch-typeinner">
						<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png" class="mp-hotsearch-typeicon">
					</div>
				</div>
				<div class="mp-hotsearch-itemcon mp-sight-maxline" mp-role="hotsearch-select">
					<div class="mp-hotsearch-iteminner" mp-role="hotsearch-sight-inner">
						<a href="#" class="mp-hotsearch-item">宋城千古情</a>
						<a href="#" class="mp-hotsearch-item">故宫</a>
						<a href="#" class="mp-hotsearch-item">香山公园</a>
						<a href="#" class="mp-hotsearch-item">天门狐仙</a>
						<a href="#" class="mp-hotsearch-item">张家界大峡谷</a>
						<a href="#" class="mp-hotsearch-item">鼓浪屿往返渡轮</a>
						<a href="#" class="mp-hotsearch-item">鼓浪屿</a>
						<a href="#" class="mp-hotsearch-item">颐和园</a>
						<a href="#" class="mp-hotsearch-item">婺源</a>
						<a href="#" class="mp-hotsearch-item">上海迪斯尼乐园</a>
						<a href="#" class="mp-hotsearch-item">北京欢乐谷</a>
						<a href="#" class="mp-hotsearch-item">八达岭长城</a>
						<a href="#" class="mp-hotsearch-item">雍和宫</a>
						<a href="#" class="mp-hotsearch-item">恭王府</a>
						<a href="#" class="mp-hotsearch-item">天坛公园</a>
						<a href="#" class="mp-hotsearch-item">华山</a>
						<a href="#" class="mp-hotsearch-item">玉龙雪山</a>
						<a href="#" class="mp-hotsearch-item">西岭雪山滑雪场</a>
						<a href="#" class="mp-hotsearch-item">乌镇西栅</a>
						<a href="#" class="mp-hotsearch-item">慈城古镇</a>
						<a href="#" class="mp-hotsearch-item">古北水镇</a>
						<a href="#" class="mp-hotsearch-item">都姜堰</a>
						<a href="#" class="mp-hotsearch-item">泰山</a>
						<a href="#" class="mp-hotsearch-item">圆明园</a>
						<a href="#" class="mp-hotsearch-item">成都欢乐谷</a>
						<a href="#" class="mp-hotsearch-item">武汉欢乐谷</a>
						<a href="#" class="mp-hotsearch-item">泸沽湖</a>
						<a href="#" class="mp-hotsearch-item">常州环球动漫嬉戏谷</a>
						<a href="#" class="mp-hotsearch-item">深圳欢乐谷</a>
						<a href="#" class="mp-hotsearch-item">凤凰山海港乐园</a>
					</div>
				</div>
			</div>
			<div class="mp-hotsearch-group">
				<div class="mp-hotsearch-typecon">
					<div class="mp-hotsearch-typeinner">
						<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png" class="mp-hotsearch-typeicon">
					</div>
				</div>
				<div class="mp-hotsearch-itemcon mp-region-maxline" mp-role="hotsearch-select">
					<div class="mp-hotsearch-iteminner" mp-role="hotsearch-region-inner">
						<a href="#" class="mp-hotsearch-cityitem">广州</a>
						<a href="#" class="mp-hotsearch-cityitem">三亚</a>
						<a href="#" class="mp-hotsearch-cityitem">上海</a>
						<a href="#" class="mp-hotsearch-cityitem">苏州</a>
						<a href="#" class="mp-hotsearch-cityitem">厦门</a>
						<a href="#" class="mp-hotsearch-cityitem">城都</a>
						<a href="#" class="mp-hotsearch-cityitem">重庆</a>
						<a href="#" class="mp-hotsearch-cityitem">天津</a>
						<a href="#" class="mp-hotsearch-cityitem">西安</a>
						<a href="#" class="mp-hotsearch-cityitem">南京</a>
						<a href="#" class="mp-hotsearch-cityitem">深圳</a>
						<a href="#" class="mp-hotsearch-cityitem">宁波</a>
						<a href="#" class="mp-hotsearch-cityitem">昆明</a>
						<a href="#" class="mp-hotsearch-cityitem">桂林</a>
						<a href="#" class="mp-hotsearch-cityitem">大连</a>
						<a href="#" class="mp-hotsearch-cityitem">杭州</a>
						<a href="#" class="mp-hotsearch-cityitem">清远</a>
						<a href="#" class="mp-hotsearch-cityitem">青岛</a>
						<a href="#" class="mp-hotsearch-cityitem">福州</a>
						<a href="#" class="mp-hotsearch-cityitem">惠州</a>
					</div>
				</div>
			</div>
		</div>
			<div class="mp-search-nearbycon" data-click="ts_near_search" data-click-dist-city="">
				<div class="mp-search-nearbybtn">搜索身边的景点</div>
			</div>
	</div>

</template>
<script>
	export default {

}

</script>
<style>
.suggest{
	position: absolute;
    z-index: 10;
    width: 100%;
    text-align: center;
    margin-top: .2rem;
    box-shadow: 0 1px 3px 1px #c7ced4;
}
.suggest-history{
	height: .64rem;
    line-height: .64rem;
    padding: 0.05rem 0.2rem;
    background-color: #f0f5f6;
}
.search{
	font-size: .26rem;
	float: left;
	color: #888;
}
.qiehuan{
	font-size: .26rem;
	float: right;
	color: #00afc7;
}
.mp-hotsearch-group {
    position: relative;
    padding-left: .74rem;
    background-color: #fff;
    border-top: 1px solid #dce5e7;
}
.mp-hotsearch-typecon {
    position: absolute;
    left: 0;
    top: 0;
    width: .74rem;
    height: 100%;
    overflow: hidden;
    line-height: 100%;
    text-align: center;
}

.mp-hotsearch-typeicon {
    width: .3rem;
    height: .3rem;
    position: relative;
    top: 50%;
    margin-top: -.15rem;
}
.mp-hotsearch-typeinner {
    position: absolute;
    width: .72rem;
    height: 70%;
    top: 15%;
    border-right: 1px solid #dce5e7;
}
.mp-hotsearch-itemcon {
    zoom: 1;
    overflow: hidden;
    position: relative;
}
.mp-sight-maxline {
    max-height: 1.8rem;
}
.mp-hotsearch-iteminner {
    zoom: 1;
    overflow: hidden;
    position: relative;
    left: 0;
    top: 0;
}
.mp-hotsearch-group {
    position: relative;
    padding-left: .74rem;
    background-color: #fff;
    border-top: 1px solid #dce5e7;
}
.mp-hotsearch-group:last-child {
    border-bottom: 1px solid #dce5e7;
}
.mp-hotsearch-typecon {
    position: absolute;
    left: 0;
    top: 0;
    width: .74rem;
    height: 100%;
    overflow: hidden;
    line-height: 100%;
    text-align: center;
}
.mp-hotsearch-typeinner {
    position: absolute;
    width: .72rem;
    height: 70%;
    top: 15%;
    border-right: 1px solid #dce5e7;
}
.mp-hotsearch-itemcon {
    zoom: 1;
    overflow: hidden;
    position: relative;
}
.mp-region-maxline {
    max-height: .9rem;
}
.mp-hotsearch-iteminner {
    zoom: 1;
    overflow: hidden;
    position: relative;
    left: 0;
    top: 0;
}
.mp-search-nearbycon {
    padding: .2rem;
}
.mp-search-nearbybtn {
    height: .72rem;
    line-height: .72rem;
    background-color: #fff;
    text-align: center;
    font-size: .26rem;
    color: #333;
    border: 1px solid #dde1e3;
    border-radius: 2px;
}
.mp-hotsearch-item {
    display: block;
    float: left;
    height: .36rem;
    max-width: 2.89rem;
    line-height: .36rem;
    text-align: center;
    display: block;
    padding-left: .3rem;
    padding-right: .3rem;
    border-right: 1px dashed #c9cccd;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .25rem;
    margin-bottom: .25rem;
}

.mp-hotsearch-cityitem {
    display: block;
    float: left;
    height: .36rem;
    width: 24.5%;
    line-height: .36rem;
    text-align: center;
    display: block;
    border-right: 1px dashed #c9cccd;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .25rem;
    margin-bottom: .25rem;
}
</style>