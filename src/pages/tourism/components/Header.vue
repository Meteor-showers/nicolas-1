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
 	</div>
</template>

<script>

export default {
	
}
</script>

<style>
	.tourism-page{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    min-height: 100%;
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
</style>
