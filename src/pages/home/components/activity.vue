<template>
    <div class="activity">
    		<ul class="activity-top">
    			<li>
    				<span class="iconfont icon-diliweizhi"></span>
    				<i>附近</i>
    				</li>
    			<li>
    				<span class="iconfont icon-diqiu"></span>
    				<i>5折泡温泉</i>
    			</li>
    		</ul>
    		<ul class="activity-bottom" >
    			
    			<li class="promotion" v-for="item in acitivityInfo" :key="item.id">
    				<router-link :to="item.link" class="router-link">
    				<img :src="item.imgUrl"/>
    				</router-link>
    			</li>
    			
    		</ul>
    	</div>
    </div>
</template>
<script>
	export default {
		props: ["acitivityInfo"]
	}
</script>
<style>
	.activity-top{
		width:100%;
		display:flex;

		}
	.activity-top li{
		width:50%;
		height:.98rem;
		float:left;
		text-align:center;
		line-height: .98rem;
		border-bottom:8px solid #f2f2f2;
		border-right:1px solid #f2f2f2;
		border-top:1px solid #f2f2f2;
	}
	.activity-top li:nth-child(2){
		border-right:none;
	}
	
	.activity-bottom{
		width:100%;
		height:1.4rem;
	
	}
	
	.activity-bottom .promotion{
		box-sizing: border-box;
		float:left;
		height:1.4rem;
		width:50%;
		border-bottom:1px solid #f2f2f2;
	}
	/*.activity-bottom li:nth-child(1){
		background:url("../img/1685d2108b652302.png") no-repeat;
		background-size:contain;
		border-right:1px solid #f2f2f2;
	}
	.activity-bottom li:nth-child(2){
		background:url("../img/e395615b16fb1302.png") no-repeat;
		background-size:contain;
		
	}*/
	
	.activity-bottom li img{
		width:100%;
		height:1.4rem;
	}
	.activity-bottom .router-link{
		width:50%;
	}

</style>