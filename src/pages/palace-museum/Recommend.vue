<template>
	<div class="recommend">
		<div class="recommend-top">
			<span class="iconfont hand">&#xe69a;</span>
			<i class="recommend-tap">去哪儿推荐</i>
		</div>
		<ul class="recommend-bottom-top clear:both">
			<li class="bottom-top-left">
				<h3 class="recommend-title">【上午场】故宫成人票凭身份证入园</h3>
				<span class="iconfont check">&#xe601;</span>
				<i>条件退</i>
				<span class="iconfont clock">&#xe600;</span>
				<i>可定明日</i>
			</li>
			<li class="bottom-top-right">
				<h2>￥<i>40</i></h2>
				<h5>预定</h5>
			</li>
		</ul>
		<ul class="recommend-midlle-top">
			<li class="middle-top-left">
				<h3 class="recommend-middle-title">【上午场】故宫成人票 + 故宫手绘地图</h3>
				<span class="iconfont check">&#xe601;</span>
				<i>条件退</i>
				<span class="iconfont clock">&#xe600;</span>
				<i>可定明日</i>
			</li>
			<li class="middle-top-right">
				<h2>￥<i>50</i></h2>
				<h5>预定</h5>
			</li>
		</ul>



		<ul class="recommend-bottom-base clear:both">
			<li class="bottom-base-left">
				<h3 class="recommend-base-title">【五大景点】广场+故宫+八达岭长城+鸟巢水立方，北京一日游</h3>
				<span class="iconfont check">&#xe601;</span>
				<i>可定11月5日</i>
				<span class="iconfont clock">&#xe600;</span>
				<i>无购物</i>
			</li>
			<li class="bottom-base-right">
				<h2>￥<i>158</i></h2>
				<h5>预定</h5>
			</li>
		</ul>
	</div>
</template>


<script>

</script>
	

<style>
	.recommend-top{
		height:0.88rem;
		width:6rem;
		line-height:0.88rem;
		margin-left:0.2rem;
	}
	.hand{
		color:red;
		margin-right:0.2rem;
	}
	.recommend-tap{
		font-size:.3rem;
		font-weight:700;
	}
	.recommend-bottom-top{
		width:100%;
		overflow:hidden;
		padding:0 .1rem;
		border:1px solid #f2f2f2;

	}
	.recommend-bottom-top li{
			margin:.2rem 0;
			box-sizing:border-box;
		}
	.bottom-top-left {
	   width:70%;
	   float:left;
	   border-right:1px solid #f2f2f2;
	}
	.bottom-top-left iconfont{
	 color:blue;
	}
	.bottom-top-left h3{
		font-size:.3rem;
        width: 85%;
        line-height:.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
	}
	 
	 .check{
	 	font-size:.24rem;
	 	color:blue;
	 }
	.bottom-top-left i{
		font-size:.24rem;
		width:1.22rem;
		height:.32rem;
		line-height:.32rem;
		color:#616161;
		display:inline-block;
		padding-top:.1rem;

	}

	.clock{
		font-size:.24rem;
		color:blue;
	}
	
	.bottom-top-right{
	    width:30%;
	    float:left;
	}
	.bottom-top-right h2{
		width:1.33rem;
		height:0.32rem;
		color:#f78e4e;
		line-height:0.32rem;
		padding-top:.2rem;
		padding-left:.5rem;
		margin-bottom:.1rem;
		
	}
	.bottom-top-right i{
		font-size:.32rem;
		font-weight:700;
	}
	.bottom-top-right h5{
		width:1.53rem;
		height:.6rem;
		line-height:.6rem;
		text-align:center;
		margin-left:.14rem;
		border-radius:.1rem;
		color:white;
		background:#f78e4e;
	}


    
	.recommend-middle-top{
		width:100%;
		padding:0 .1rem;
		border-bottom:1px solid #f2f2f2;
	}
	.recommend-middle-top li{
			margin:.2rem 0;
			box-sizing:border-box;
		}
	.middle-top-left {
	   width:69%;
	   float:left;
	   border-right:1px solid #f2f2f2;
	   margin:.2rem 0 0 .2rem;
	}
	.middle-top-left iconfont{
	 color:blue;
	}
	.middle-top-left h3{
		font-size:.3rem;
        width: 85%;
        line-height:.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
	}
	 
	
	.middle-top-left i{
		font-size:.24rem;
		width:1.22rem;
		height:.32rem;
		line-height:.32rem;
		color:#616161;
		display:inline-block;
		padding-top:.1rem;

	}

	.middle-top-right{
	    width:25%;
	    float:left;
	}
	.middle-top-right h2{
		width:1.33rem;
		height:0.32rem;
		color:#f78e4e;
		line-height:0.32rem;
		padding-top:.2rem;
		padding-left:.5rem;
		margin-bottom:.1rem;

	}
	.middle-top-right i{
		font-size:.32rem;
		font-weight:700;
	}
	.middle-top-right h5{
		width:1.53rem;
		height:.6rem;
		line-height:.6rem;
		text-align:center;
		margin-left:.14rem;
		border-radius:.1rem;
		color:white;
		background:#f78e4e;
	}

	.recommend-bottom-base{
		width:100%;
		overflow:hidden;
		padding:0 .1rem;
		margin-top:.2rem;
		border:1px solid #f2f2f2;

	}
	.recommend-bottom-base li{
			margin:.2rem 0;
			box-sizing:border-box;
		}
	.bottom-base-left {
	   width:70%;
	   float:left;
	   border-right:1px solid #f2f2f2;
	}
	.bottom-base-left iconfont{
	 color:blue;
	}
	.bottom-base-left h3{
		font-size:.3rem;
        width: 85%;
        line-height:.4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
	}
	 
	 .check{
	 	font-size:.24rem;
	 	color:blue;
	 }
	.bottom-base-left i{
		font-size:.24rem;
		width:1.22rem;
		height:.32rem;
		line-height:.32rem;
		color:#616161;
		display:inline-block;
		padding-top:.1rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;


	}

	.clock{
		font-size:.24rem;
		color:blue;
	}
	
	.bottom-base-right{
	    width:30%;
	    float:left;
	}
	.bottom-base-right h2{
		width:1.33rem;
		height:0.32rem;
		color:#f78e4e;
		line-height:0.32rem;
		padding-top:.2rem;
		padding-left:.5rem;
		margin-bottom:.1rem;
		
	}
	.bottom-base-right i{
		font-size:.32rem;
		font-weight:700;
	}
	.bottom-base-right h5{
		width:1.53rem;
		height:.6rem;
		line-height:.6rem;
		text-align:center;
		margin-left:.14rem;
		border-radius:.1rem;
		color:white;
		background:#f78e4e;
	}



</style>
