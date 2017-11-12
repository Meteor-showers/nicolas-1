<!--<template>	
	
 	<div class="dock dock-fadein">
 		<div class="booking-info">
 			<h5 class="booking-title">
 				<p class="ellipsis">【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</p>
 			</h5>
 			<p class="booking-price">
 				<span class="price">￥
 					<em class="price-num">148</em>
 				</span>
 				<span class="we">起/份</span>
 			</p>
 		</div>
 		<div class="dock-content">
 			<div>
 				<div class="specifications-con" style="height:417.6px;overflow: hidden;">
 					<div style="transition-property: transform; transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);">
 						<div class="booking-calendar border-top">
 							<h6 class="booking-note">日期选择</h6>
 							<div class="booking-datecard clrfix">
 								<span class="datecard datecard-disabled">
 									<em class="datecard-name">今天</em>
 									<strong class="datecard-detail">11月12日</strong>
 								</span>
 								
 								<span class="datecard datecard-disabled">
 									<em class="datecard-name">明天</em>
 									<strong class="datecard-detail">11月13日</strong>
 								</span>
 								
 								<span class="datecard datecard-disabled">
 									<em class="datecard-name">后天</em>
 									<strong class="datecard-detail">11月14日</strong>
 								</span>
 								
 								<span class="datecard datecard-disabled">
 									<em class="qita">其他日期</em>
 								</span>
 							</div>
 						</div>
 						
 						<div class="booking-select border-top">
 							<h6 class="booking-note">人群</h6>
 							<div class="booking-textcard clrfix">
 								<span class="play-date play-date-active">成人</span>
 								<span class="play-date">儿童</span>
 							</div>
 						</div>
 						
 						<div class="booking-select border-top">
 							<h6 class="booking-note">服务语言</h6>
 							<div class="booking-textcard clrfix">
 								<span class="play-date play-date-active">中文</span>
 							</div>
 						</div>
 						
 						<div class="booking-select border-top">
 							<h6 class="booking-note">其他</h6>
 							<div class="booking-textcard clrfix">
 								<span class="play-date play-date-active">不含缆车</span>
 								<span class="play-date">含缆车</span>
 							</div>
 						</div>
 					</div>
 				</div>
 				
 				<a class="booking-btn">立即预定</a>
 			</div>
 		</div>
 		<!--<div class="iconfont mpw-dock-close">>>>>></div>
 		<div class="mask" style="display:block"></div>-->
 	<!--</div>
 	
</template>
 
<script>
	export default {}
</script>

<style>
	.dock{
		height:533.6px;
		position: fixed;
	    z-index: 92;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    background: #fff;
	} 	
	.booking-info{
		padding:0 .2rem;
	}
	.booking-title{
		margin-right: .6rem;
	    padding: .3rem 0 .1rem 0;
	    font-size: .34rem;
	    line-height: .4rem;
	}
	.ellipsis{
		overflow: hidden;
	    width: 100%;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.booking-price{
	color: #9e9e9e;
    font-size: .24rem;
    line-height: .48rem;
    color: #ff8300;
    margin-right: .06rem;
	}
	.we{
		color: #9e9e9e;
	}
	.dock-content{
		
	}
	.booking-calendar{
		margin: .18rem .2rem 0 .2rem;
    	padding-bottom: .3rem;
	} 
	.border-top{
		
	}
	.booking-note{
		padding-top: .1rem;
	    line-height: .66rem;
	    color: #333;
	    font-size: .26rem;
	}
	.booking-datecard .datecard:first-child {
    	margin-left: 0;
    }
    .booking-datecard .datecard{
	    box-sizing: border-box;
	    float: left;
	    width: 22.5%;
	    margin-left:3.33%;
	    height: .86rem;
	    overflow: hidden;
    }
    .datecard-disabled {
	    border-color: #ececec;
	    background: #fff;
    }
    .datecard {
	    display: inline-block;
	    min-width: 1.2rem;
	    min-height: .82rem;
	    border: .02rem solid #bdbdbd;
	    text-align: center;
	    border-radius: .1rem;
    }
    .datecard-name{
	    color: #dedede;
	    color:#212121;
	    padding-top:.08rem;
	    font-size:.28rem;
	    line-height:.36rem;
	    display:block;
	    width:100%;
    }
    .datecard-detail{
	    padding-bottom: .06rem;
	    color: #DEDEDE;
	    font-size: .24rem;
	    line-height: .32rem;
    }
    /*.datecard1{
    	color:#212121
    }*/
    .qita{
    	line-height:.6rem;
    }
    .booking-select{
    	margin: 0 .2rem;
    	padding-bottom: .3rem;
    }
    .booking-note{
    	    padding-top: .1rem;
    line-height: .66rem;
    color: #333;
    font-size: .26rem;
    }
    .booking-textcard{
    	margin-top:-.15rem;
    } 
    .play-date{
	    display: inline-block;
	    float: left;
	    margin-right: .2rem;
	    margin-top: .15rem;
	    padding: 0 .2rem;
	    line-height: .53rem;
	    font-size: .28rem;
	    border-radius: .1rem;
	    border: .02rem solid #c7ced4;
    } 
    .play-date-active{
	    position: relative;
	    border: .02rem solid #00bcd4;
	    background: #00bcd4;
	    color: #fff;
	    overflow: hidden;
    }
    .booking-btn{
	    display: block;
	    width: 100%;
	    border: 0 none;
	    background: #ff9800;
	    color: #fff;
	    text-align: center;
	    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    }
    .iconfont{
    	    font-family: 'mpiconfont';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    }
    .mask{
    	top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    z-index: 91;
    background: rgba(0,0,0,.5);
    }
</style>-->