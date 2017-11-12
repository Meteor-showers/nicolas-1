<template>
	<div class="lazy-lode">
		<h2 class="mp-modtitle">热销推荐</h2>
		<div class="mp-hot-con" >
			<div id="wrapper">
				<div id="scroller">
				<ul>
					<li class="mp-hot-prod mp-border-bottom" v-for="item in recommendInfo" :key="item.id">
						<div class="mp-hotlist-img image-ready">
							<img :src="item.imgUrl" />
						</div>
						<div class="mp-hotlist-infos">
							<div class="mp-hotlist-title">{{item.placeInfo}}</div>
							<div class="mp-hotlist-desc">{{item.introduceInfo}}</div>
						</div>
						<div class="mp-price mp-hotlist-price">
							￥
							<em class="mp-price-num">{{item.specificInfo}}</em>
							<span class="mp-price-text">起</span>
						</div>
					</li>
				</ul>
				</div>
			</div>
		</div>
		<div class="mp-modmore">
			<a href="">查看所有产品</a>
		</div>
	</div>
</template>

<script>

	import IScroll from './iscroll-probe.js';
	
	export default {
	    data(){
	        return {
	        	showLoading: false
	        }
	    },

	    computed: {
	    	recommendInfo() {
	    		return this.$store.state.home.recommendInfo;
	    	}
	    },

	    mounted() {
	    	this.myScroll = new IScroll('#wrapper', { probeType: 2,mouseWheel: true });
	    	this.myScroll.on("scroll", () => {
	    		 console.log(this.myScroll.y);
	    		if (this.myScroll.y < (-this.recommendInfo.length * 90) + 150) {
	    			this.showLoading = true;
	    			this.$store.commit("refreshInfo");
	    		}
	    		if (this.myScroll.y > 50) {
	    			this.showLoading = true;
	    			this.$store.commit("refreshInfo");
	    		}

	    	})
	    },

	    updated(){
	    	setTimeout(() => { 
	    		this.showLoading = false;
	    		this.myScroll.refresh();
	    	}, 500)
	    }
	}
</script>

<style>
	#wrapper{
		height: 150px;
		overflow: hidden;
	}
	.mp-modtitle{
		height: .8rem;
    	padding-left: .26rem;
    	line-height: .8rem;
    	color: #212121;
    	background: #f2f2f2;
	}
	.mp-hot-con{
		background-color: #fff;
	}
	.mp-hot-prod{
		position: relative;
	    overflow: hidden;
	    height: 1.4rem;
	    padding: .24rem;
	    border-bottom: 1px solid #e0e0e0;
	}
	.mp-hotlist-img img{
		position: absolute;
    	top: 0.24rem;
    	left: .24rem;
    	width: 1.4rem;
   		height: 1.4rem;
	}
	.image-ready{
		background: none !important;
	}
	.image-ready img {
    	opacity: 1;
	}
	.mp-hotlist-infos{
		margin-left: 1.6rem;
	}
	.mp-hotlist-title{
		overflow: hidden;
    	margin-top: .04rem;
    	margin-bottom: .1rem;
    	color: #212121;
    	font-size: .3rem;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.mp-hotlist-price {
	    margin-left: 1.6rem;
	    color: #ff8300;
	}
	.mp-hotlist-price .mp-price-num {
	    font-size: .36rem;
	    padding: 0 .04rem;
	}
	.mp-price-num {
    	font: .28rem Tahoma,Helvetica,sans-serif;
	}
	.mp-price {
    	font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
	}
	.mp-price-text {
	    color: #9e9e9e;
	    font-size: .24rem;
	}
	.mp-price {
    font: .24rem "Microsoft yahei","Hiragino sans gb",Arial,sans-serif;
	}
	.mp-hotlist-price {
	    margin-left: 1.6rem;
	    color: #ff8300;
	}
	.mp-modmore{
		margin-top: -.02rem;
		height: .88rem;
	    color: #00afc7;
	    line-height: .88rem;
	    text-align: center;
	}
	.mpw-input-number-minus,
	.mpw-input-number-plus {
		position: relative;
		display: inline-block;
		width: .56rem;
		height: .56rem;
		margin: .02rem;
		background-color: #00afc7
	}
	.mpw-input-number-minus {
		border-right: 0
	}
	.mpw-input-number-plus {
		border-left: 0
	}
</style>