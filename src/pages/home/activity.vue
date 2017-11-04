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
    		<ul class="activity-bottom">
    			<li>
    				<img src="./img/1685d2108b652302.png">
    			</li>
    			<li>
    				<img src="./img/e395615b16fb1302.png">
    			</li>
    		</ul>
    	</div>
    </div>
</template>
<script>

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
		display: flex;
	}
	.activity-bottom li{
		float:left;
		width:50%;
		
		border-bottom:1px solid #f2f2f2;
	}
	.activity-bottom li:nth-child(1){
		border-right:1px solid #f2f2f2;
	}
	.activity-bottom li img{
		width:100%;
		height:1.4rem;
	}
</style>