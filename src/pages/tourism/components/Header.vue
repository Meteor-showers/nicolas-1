 <template>
	<div class="tourism-page">
 		<div class="tourism-header"></div>
 		<div class="tourism-main">
 			<div class="tourism-imgnav">
 				<img class="tourism-imgnav-img" src="http://img1.qunarzz.com/p/tts1/1611/34/ce613ef51240ad02.jpg_640x360_a7f433dc.jpg" alt="【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游">
 				<div class="tourism-imgnav-mask"></div>
 				<div class="tourism-imgnav-info">
 					<span class="tourism-imgnav-info-left">出发地.北京</span>
 					<span class="tourism-imgnav-info-right">国中青</span>
 				</div>
 			</div>
 		</div>
 		<div class="tourism-prdcard">
 					<h3 class="tourism-prdcard-name">【5大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</h3>
 					<div class="prdcard-price-info">
 						<em class="prdcard-sign">￥</em>
 						<span class="prdcard-price">148</span>
 						<span class="prdcard-text">起</span>
 						<span class="prdcard-reserve">可定明日</span>
 						<span class="prdcard-sold">已售:3254</span>
 					</div>
 					<div class="prdcard-tag">
 						<div class="prdcard-tag-item">
 							<span class="prdcard-icon iconfont icon-duihao"></span>
 							<span class="prdcard-font">条件退</span>
 						</div>
 						<div class="prdcard-tag-item">
 							<span class="prdcard-icon iconfont icon-duihao"></span>
 							<span class="prdcard-font">铁定成团</span>
 						</div>
 						<div class="prdcard-tag-item">
 							<span class="prdcard-icon iconfont icon-duihao"></span>
 							<span class="prdcard-font">无自费</span>
 						</div>
 						<div class="prdcard-tag-item">
 							<span class="prdcard-icon iconfont icon-duihao"></span>
 							<span class="prdcard-font">无购物</span>
 						</div>
 					</div>
 					<div class="comments-con" style="margin-bottom:0;">
 						<span class="comments-con-num">4.9</span>
 						<span class="comments-text">分</span>
 						<span class="comments-good">非常满意</span>
 						<span class="comments-numbers">
 							用户评价(299)
 							<span class="comments-icon iconfont icon-gengduo"></span>
 						</span>
 					</div>
 				</div>
 				<div class="comments-pl">
 						<div class="comments-pl-item">
 							<div class="conent-level">
 									<strong class="level-star-gain">BBBBB</strong>
 									<span class="level-comments">l*8 &nbsp;&nbsp; 2017-11-07</span>
 								<p class="message">
 									不错时间安排的很紧凑人导游也很尽心尽责下次还推荐朋友
 								</p>
 							</div>
 						</div>
 					</div>
 	</div>
 	
</template>

<script>

export default {
	
}
</script>

<style>
	.tourism-page{
	    background: #f1f5f6;
	}
	.tourism-header{
		position: fixed;
	    width: 100%;
	    top: 0px;
	    left: 0px;
	    opacity: 0;
	    display: none;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}
	.tourism-main{
		
	}
	.tourism-imgnav{
		overflow: hidden;
    	position: relative;
    	height: 4rem;
	}
	.tourism-imgnav-img{
		width: 100%;
    	min-height: 4rem;
        vertical-align: middle;
	}
	.tourism-imgnav-mask{
		position: absolute;
    	left: 0;
    	bottom: 0;
    	width: 100%;
    	height: .93rem;
    	color: #fff;
	}
	.tourism-imgnav-info{
		overflow: hidden;
	    position: absolute;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    font-size: 0;
	}
	.tourism-imgnav-info-left{
		 margin-left: .2rem;
		 overflow: hidden;
	    display: inline-block;
	    height: .34rem;
	    margin-bottom: .22rem;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .34rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.tourism-imgnav-info-right{
		margin-right: .2rem;
    	float: right;
    	overflow: hidden;
	    display: inline-block;
	    height: .34rem;
	    margin-bottom: .22rem;
	    color: #fff;
	    font-size: .24rem;
	    line-height: .34rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.tourism-prdcard{
		position: relative;
	    margin-top: -.1rem;
	    padding: .2rem .2rem 0 .2rem;
	    background: #fff;
    	border-radius: .1rem .1rem 0 0;
	}
	.tourism-prdcard-name{
		overflow: hidden;
	    display: -webkit-box;
	    color: #212121;
	    font-size: .36rem;
	    line-height: .44rem;
	    text-overflow: ellipsis;
	    font-weight:normal;
	}
	.prdcard-price-info{
		overflow: hidden;
	    margin: .16rem 0;
	    height: .48rem;
	    font-size: 0;
	}
	.prdcard-sign{
		color: #ff8300;
	    font-size: .24rem;
	    font-style:normal;
	}
	.prdcard-price{
		color: #ff8300;
	    font-size: .48rem;
	}
	.prdcard-text{
		color: #9e9e9e;
	    font-size: .24rem;
	}
	.prdcard-reserve{
		color: #616161;
	    font-size: .24rem;
	    margin-left: .2rem;
    }
    .prdcard-sold{
	    color: #616161;
	    float: right;
	    height: .24rem;
	    margin-top: .2rem;
    }
    .prdcard-tag{
	    overflow: hidden;
	    padding-bottom: .2rem;
	    font-size: 0;
    }
    .prdcard-tag-item :not{
    	margin-right:.2rem;
    }
    .prdcard-tag-item{
	    float: left;
	    height: .34rem;
	    font-size: .24rem;
	    line-height: .34rem;
    }
    .prdcard-icon{
	    margin-right: .04rem;
	    color: #00afc7;
	    font-size: .28rem;
	    vertical-align: -.02rem;	
    }
    .prdcard-font{
    	color: #616161;
    }
    .comments-con{
    	position:relative;
    	margin-top:.2rem;
    	background:#fff;
    	height:.8rem;
    	line-height:.8rem;
    	border-bottom:1px solid #ccc;
    }
    .comments-con-num{
	    font-size: .4rem;
	    color: #00afc7;
	    margin-left: .2rem;
	    line-height:.8rem;
    }
    .comments-text{
    	color: #00afc7;
    	line-height:.8rem;
    }
    .comments-good{
	    display: inline-block;
	    margin-left: .1rem;
	    color: #616161;
    }
    .comments-numbers{
	    float: right;
	    position: relative;
	    top: .25rem;
	    display: inline-block;
	    line-height: .28rem;
	    font-size: .28rem;
	    margin-left: .16rem;
	    margin-right: .2rem;
	    color: #9e9e9e;
    }
    .comments-icon{
	    position: relative;
	    top: .02rem;
	    font-size: .24rem;
    }
    .comments-pl{
    	position:relative;
    	padding: .1rem .2rem;
    	background: #fff;
    }
    .comments-pl-item{
    	padding: .2rem 0 !important;
    	width:100%;
    	color:#616161;    
    }
    .conent-level{
    	color:#616161;
    }
    .level-star-gain{
    	width:100%;
    	z-index:2;
    	color:#00bcd4;
    }
    .level-comments{
	    float: right;
	    margin-left: .2rem;
	    color: #616161;
    }
    .message{
    	line-height: .4rem;
    	overflow: hidden;
    	text-overflow: ellipsis;
    }
</style>
