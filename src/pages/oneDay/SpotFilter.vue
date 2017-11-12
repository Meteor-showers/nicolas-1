<template>
  	<div class="spot-container">
	  	<div class="spot-filter">
	  		<ul class="spot-filter-list" :left="left">
				<li class="spot-filter-listItem"  @click="handleSelectClick(index)" :class="{select:ind===index}" v-for="(item,index) in spotarr" >{{item}}</li>
	  		</ul>
	  	</div>
  		<div v-show="show" class="spot-check">
  			<p class="spot-check-title">游玩景点<span>（可多选）</span></p>
  			<ul class="spot-check-list">
				<li class="spot-filter-listItem" @click="handleSelectClick(index)" :class="{select:ind===index}" v-for="(item,index) in spotarr">{{item}}</li>
  			</ul>
  		</div>
  		<div @click="show=!show" class="status-switch">
  			<span class="switch-icon iconfont icon-jiantouxia"></span>
  		</div>
  	</div>
</template>

<script>
export default {
	data:function(){
		var spotarr = ["八达岭长城","古北水镇","故宫","鸟巢","司马台长城","颐和园","天安门广场","水立方","古北水镇天然温泉","恭王府","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园","什刹海","定陵","古北口文化文物旅游区","天坛公园","明十三陵","北京动物园"];
		var left = 0;
		var show = false;
		var ind=""
		return {
			spotarr,
			left,
			show,
			ind
		}
	},
	methods:{
		handleSelectClick:function( index ){
			this.ind=index;

		}
	}
}
</script>

<style>
	.spot-container{
		height: .68rem;
		background: #e5e7e8;
		position: relative;
		padding: .08rem .12rem;
	}
	::-webkit-scrollbar{
		display: none;
	}
	.spot-filter{
		position: relative;
		width: 100%;
		height: .68rem;
		overflow: auto;
		white-space: nowrap;
	}
	.spot-filter-list{
		/* width: 100rem; */
		display: flex;
		white-space: nowrap;
		height: .68rem;
		position: absolute;
		clear: both;
		overflow-x: auto;
	}
	.spot-filter-listItem{
		float: left;
		margin: .04rem .08rem;
	    min-width: .26rem;
	    padding: 0 .22rem;
	    font-size: .26rem;
	    line-height: .56rem;
	    border-radius: .04rem;
	    border: 1px solid #fff;
	    color: #212121;
	    background: #fff;

	} 
	.status-switch {
		position: absolute;
	    z-index: 3;
	    top: 0;
	    right: 0;
	    width: .8rem;
	    height: .78rem;
	    background: #e5e7e8;
	    text-align: center;
	}
	.switch-icon{
		line-height: .8rem
	}
	.spot-check{
		position: absolute;
		z-index: 2;
		background: #e5e7e8;
		width: 100%;
		top: 0;
		left: 0;
		padding: .08rem .12rem;
		max-height: 6rem;
		overflow: auto;
	}
	.spot-check-title{
		color: #212121;
	    font-size: .28rem;
	    line-height: .8rem;
	    text-indent: .2rem;
	}
	.spot-check-title span{
		font-size: .24rem;
	}
	.select{
		border-color: #00bcd4;
	}
</style>