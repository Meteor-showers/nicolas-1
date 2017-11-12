<template>
	<div>
		<div v-show="maskShow" class="mask"></div>
		<div class="OneDay-footer-container">
			<footer class="OneDay-footer" @click="handleFooterClick">
				<div @click="handleSwitchClick(1)" :class="{selectIcon:isSelect===1}" class="OneDay-classify OneDay-footer-select">
					<span class="iconfont icon-quanbufenlei OneDay-footer-icon"></span>
					<p class="OneDay-footer-tip">全部分类</p>
				</div>
				<div @click="handleSwitchClick(2)" :class="{selectIcon:isSelect===2}" class="OneDay-filtrate OneDay-footer-select">
					<span class="iconfont icon-shaixuan OneDay-footer-icon"></span>
					<p class="OneDay-footer-tip">筛选</p>
				</div>
				<div @click="handleSwitchClick(3)" :class="{selectIcon:isSelect===3}" class="OneDay-sort OneDay-footer-select">
					<span class="iconfont icon-jiage OneDay-footer-icon"></span>
					<p class="OneDay-footer-tip">推荐排序</p>
				</div>
			</footer>
			<div v-show="contentShow" class="oneDay-footer-content">
				<div v-if="footerShow===1">
					<div class="OneDay-classify-left">
						<ul class="OneDay-classify-list">
							<li class="OneDay-classify-listItem" v-for="item in classifyArr">{{item[0]}}<span>{{item[1]}}</span></li>

						</ul>
					</div>
					<div class="OneDay-classify-right"></div>
				</div>
				<div v-else-if="footerShow===2" class="OneDay-filtrate-content">
					<div class="OneDay-filtrate-left">
						<ul class="OneDay-filtrate-list">
							<li @click="handleChooseAreaClick('a')" :class="{select:isChooseArea==='a'}" class="OneDay-filtrate-listItem">目的地</li>
							<li @click="handleChooseAreaClick('b')" :class="{select:isChooseArea==='b'}" class="OneDay-filtrate-listItem">出发地</li>
						</ul>
					</div>
					<div class="OneDay-filtrate-right">
						<ul v-if="siteshow==='a'" class="end">
							<li @click="handleClose" class="OneDay-filtrate-listItem site-list" v-for="item in EndArr">{{item}}</li>
						</ul>
						<ul v-else class="start">
							<li @click="handleClose" class="OneDay-filtrate-listItem site-list" v-for="item in startArr">{{item}}</li>
						</ul>
					</div>
				</div>
				<div v-else-if="footerShow===3" class="OneDay-sort-content">
					<div id="wrapper">
						<div id="scroller">
							<ul class="sort-list">
								<li class="sort-listItem" v-for="(item,index) in sortArr" :index="index" :class="{selectIcon:ind===index}" @click="handleSelect(index)">{{item}}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
	  	</div>
  	</div>
</template>

<script>

	require( '../../../utils/iscroll-lite.js' );

	export default {
		// data() {
		// 	const classifyArr = [["全部分类","173"],["一日游","149"],["文化古迹","12"],["城市观光","4"],["展馆","3"],["交通","2"],["自然风光","1"],["餐饮","1"],["温泉","1"]];
		// 	const EndArr = ["全部目的地","北京","天津","唐山","保定","承德"];
		// 	const startArr = ["全部出发地","北京"];
		// 	const sortArr = ["排序推荐","销量最高","价格最高","价格最低","热门评论","本周最热","  "];
		// 	return {
		// 		maskShow:false,
		// 		classifyArr,
		// 		footerShow:2,
		// 		EndArr,
		// 		startArr,
		// 		sortArr,
		// 		siteshow:'a',
		// 		contentShow:false,
		// 		isSelect:'',
		// 		isChooseArea:'a',
		// 		ind:0
		// 	}
		// },
		// methods:{
		// 	handleChooseAreaClick(n) {
		// 		this.isChooseArea = n;
		// 		this.siteshow = n;
		// 	},

		// 	handleFooterClick() {
		// 		this.contentShow = true;
		// 		this.maskShow = true;
		// 	},

		// 	handleSwitchClick(n) {
		// 		this.footerShow = n;
		// 		this.isSelect = n;
		// 	},

		// 	handleSelect(index) {
		// 		this.ind = index;
		// 		this.contentShow = false;
		// 		this.maskShow = false;
		// 	},

		// 	handleClose(){
		// 		this.contentShow = false;
		// 		this.maskShow = false;
		// 	}
		// },

		// mounted() {
		// 	setTimeout( () =>{
		// 		this.myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });
		// 	},2000 )
		// }
	}
</script>

<style scoped>
	#wrapper {
		height:5.28rem;
 		background: #fff;
		overflow: hidden;
	}
	.mask{
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, .5);
		position: fixed;
		top:0;
		left:0;
		right: 0;
		bottom: 0;
		z-index: 4;
	}
	.OneDay-footer-container{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 4;
	}
	.OneDay-footer{
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,.8);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.OneDay-footer-select{
		padding: .08rem .1rem 0;
    	color: #fff;
    	display: flex;
    	flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33.3%;
	}
	.OneDay-footer-icon{
		display: inline-block;
		height: .32rem;
		font-size: .32rem;
	}
	.OneDay-footer-tip{
		height: .4rem;
	    font-size: .24rem;
	    line-height: .4rem
	}
	.oneDay-footer-content{
		overflow: hidden;
	    position: absolute;
	    bottom: .8rem;
	    left: 0;
	    width: 100%;
	    background: #fff;
	    height: 5.28rem;
	    overflow: auto;
	}
	.OneDay-classify-left{
		width: 40%;
		float: left;
	}
	.OneDay-classify-list{
		background: #f4f5f6;
	}
	.OneDay-classify-listItem{
		padding: .24rem .1rem .24rem .2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .4rem;
	    border-bottom: .002rem solid #eaeaea
	}
	.OneDay-classify-listItem span{
		display: inline-block;
		float: right;
		margin-right: 5%;
		font-size: .24rem;
	}
	.OneDay-classify-listItem:nth-child(1){
		background: #fff;
	}
	.OneDay-filtrate-content{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		overflow: hidden;
	}
	.OneDay-filtrate-left{
		background: #f4f5f6;
		width: 30%;
		height: 5.28rem;
	}
	.OneDay-filtrate-listItem{
		padding: .24rem .2rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.select{
		background: #fff;
	}
	.OneDay-filtrate-right{
		width: 70%;
		height: 5.28rem;
		overflow: hidden;
	}
	.site-list{
		border-bottom: .002rem solid #e4e6e8;
	}
	.sort-list{
		width: 100%;
		text-align: center;
		background: #fff;
	}
	.sort-listItem{
		padding: .24rem .1rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .4rem;
	    border-top:.001rem solid #e4e6e8
	}
	.sort-listItem:first-child{
		border-top:none;
	}
	.sort-listItem:last-child{
		border-top:none;
	}
	.selectIcon{
		color: #00afc7;
	}
</style>