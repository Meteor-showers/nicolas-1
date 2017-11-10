<template>
<div class="list-page">
	<div id="wrapper">
		<div id="scroller">
			<ul>
				<li v-if="showLoading" class="listShowLoading">正在加载</li>
				<li class="list-item"  v-for="item in onedayInfo" :key="item.id">
					<div class="list-img-con">
						<img :src="item.imgUrl" class="list-img">
						<span class="list-bookingflag">
							<span class="list-bookingtext">{{item.text}}</span>
						</span>
					</div>
					<div class="list-productinfo">
						<h4 class="list-productname">{{item.title}}</h4>
						<div class="list-taglist">
							<span class="list-tagitemlight">{{item.tagitemlight}}</span>
							<span class="list-tagitem">{{item.tagitem}}</span>
							<span class="list-tagitem">{{item.tagitem1}}</span>
						</div>
						<div class="list-priceinfo"><span class="list-qunarprice">{{item.priceinfo}}</span><em class="list-price">{{item.listPrice}}</em><span class="list-priceflag">{{item.listPriceflag}}</span>
						</div>
						<div class="list-moreinfo">
							<span class="list-text">{{item.listText}}</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="list-moreinfoCon">
		<div class="list-pageCon">
			<div class="list-pagination">
				<a href="javascript:void(0);" class="list-paginationbtn">上一页</a><span class="list-page-num">1 / 15</span><a href="javascript:void(0);" class="list-paginationbtn list-paginationnext">下一页</a>
			</div>
			<div class="list-page-text">去哪儿门票</div>
		</div>
	</div>
</div>

</template>
<script>
	require ('../../../utils/iscroll-lite.js')

	export default{
		data (){
			return{
				showLoading:false
			}
		},
		computed:{
			onedayInfo(){
				return this.$store.state.oneDay.onedayInfo
			}
		},
		mounted(){
				this.myScroll=new IScroll("#wrapper",{probeType:2,mouseWheel:true});
				this.myScroll.on("scroll",()=>{
					if(this.myScroll.y<(-this.onedayInfo.length*95+450)){
						this.showLoading=true;
						this.$store.commit("refreshInfo");
					}
					if(this.myScroll.y>50){
						this.showLoading=true;
						this.$store.commit("refreshInfo");
					}
				})
		},
		updated(){
				setTimeout(()=>{
					this.myScroll.refresh();
					this.showLoading=false;
				},500);
		}
	}
</script>

<style>
	#wrapper{
		height: 465px;
		overflow: hidden;
	}
	.listShowLoading{
		text-align: center;
	}
	.list-page{
		background:#f5f5f5;
	}
	.list-item{
		display:flex;
		position:relative;
		background:#fff;
	}
	.list-img-con{
		margin:.2rem;
		position:relative;
	}
	.list-img{
		width: 1.6rem;
   		height: 1.6rem;
	}
	.list-bookingflag{
		position: absolute;
	    left: -.04rem;
	    top: -.04rem;
	    height: .24rem;
	    padding: .02rem;
	    background: #00bcd4;
	    color: #fff;
	    line-height: .24rem;
	}
	.list-bookingflag::after{
		content: "";
	    position: absolute;
	    top: 0;
	    right: -.1rem;
	    width: 0;
	    height: 0;
	    border-top: .14rem solid #00bcd4;
	    border-bottom: .14rem solid #00bcd4;
	    border-right: .1rem solid transparent;
	}
	.list-bookingtext{
	    display: block;
	    font-size: .24rem;
	    -webkit-transform: scale(.83)
	}
	.list-productinfo{
		padding: .2rem .2rem .2rem 0;
	    height: 1.6rem;
	    overflow: hidden;
	    border-bottom:1px solid #c9cccd;
	    flex:1;
	}
	.list-cashback{
		position: absolute;
	    right: .02rem;
	    top: .85rem;
	    color: #ff1200;
	    font-size: 0;
	    border:1px solid #ff1200;
	    -webkit-transform: scale(.5);
	}
	.list-product-cashback{
		display: inline-block;
	    width: 1.0rem;
	    height: .4rem;
	    font-size: .36rem;
	    line-height: .32rem;
	    text-align: center;
	    color: #ff1200;
	}
	.list-productname{
		line-height: .36rem;
		font-size: .3rem;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.list-taglist{
		position: relative;
	    top: .06rem;
	    overflow: hidden;
	    max-height: .58rem;
	    margin-right: 1rem;
	    padding-top: .06rem;
	    line-height: .24rem;
	    font-size: 0;
	}
	.list-tagitemlight{
		display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #00bcd4;
	}
	.list-tagitem{
		display: inline;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    color: #616161;
	    border-left:1px solid #c9cccd;

	}
	.list-priceinfo{
	    position: absolute;
	    right: .2rem;
	    bottom: .48rem;
	    height: .32rem;
	    line-height: .32rem;
	    color: #9e9e9e;
	    text-align: right;
	}
	.list-qunarprice{
	    font-size: .22rem;
	    font-weight: bold;
	    color: #ff8300;
	}
	.list-price{
		font-size: .32rem;
	    padding-left: .04rem;
	    font-weight: bold;
    	color: #ff8300;
	}
	.list-priceflag{
		font-size: .24rem;
	    padding-left: .02rem;
	}
	.list-moreinfo{
	    position: absolute;
	    bottom: .2rem;
	    width: 100%;
	    font-size: 0;
	    color: #9e9e9e;
	}
	.list-text{
		position: relative;
		left:-0.1rem;
	    padding: 0 .1rem;
    	font-size: .22rem;

	}
	.list-moreinfoCon{
	    padding: .2rem 0;
	    color: #00afc7;
	    line-height: .82rem;
	    background:#f5f5f5;

	}
	.list-pagination{
	    height: .7rem;
    	line-height: .7rem;
    	text-align:center
	}
	.list-paginationbtn{
	    background: #bdbdbd;
	    color: #fff;
	    border: 0;
	    display: inline-block;
   		width: 1.4rem;
   		line-height: .6rem;
    	border-radius: .06rem;
    	text-align:center
	}
	.list-page-num{
		color: #212121;
	    line-height: .6rem;
	    padding: 0 15px;
	}
	.list-page-text{
		padding-top: .2rem;
	    line-height: .3rem;
	    font-size: .3rem;
	    text-align:center;
	}
	.list-paginationnext{
		background:#fff;
		color:#00afc7;
		border:1px solid #00afc7;

	}
</style>