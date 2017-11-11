<template>
	<div class="week-list">
		<h2 class="week-list-title">周末去哪儿</h2>
		<div v-for="item in weekendInfo" :key="item.id">
			<router-link :to="item.link">
				<div class="week-list-con">
			 		<img class="week-list-img" :src="item.imgUrl">
			 	</div>
			 </router-link>
			 		<div class="week-list-info">
				 		<p class="week-list-name">{{item.name}}</p>
				 		<p class="week-list-desc">{{item.note}}</p>
				 	</div>
	 	</div>
 	</div>
</template>
	 		
<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				
			}
		},
		computed:mapState({
			weekendInfo(state){
				return state.home.weekendInfo
			}
		}),
	}
</script>

<style>
	.week-list{
		background:#f2f2f2;
	}
	.week-list-title{ 
		height: .8rem;
    	padding-left: .26rem;
    	line-height: .8rem;
    	color: #212121;
    	white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.week-list-con{
	    overflow: hidden;
    	height: 0;
    	padding-bottom: 37.4375%;
	}
	.week-list-img{
		display:block;
    	width: 100%;
    	background:#fff;
    	vertical-align: middle;
    	transition: opacity 400ms;
    	background: url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1794590388,2279408413&fm=27&gp=0.jpg) no-repeat;
		background-size: 100% 100%;
	}
	.week-list-info{
		position:relative;
		background:#fff;
		padding:.14rem .2rem .2rem .2rem;
	}
	.week-list-name{
		overflow: hidden;
		padding-right:1.4rem;
		color: #212121;
		font-size: .28rem;
		line-height: .48rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
	 .week-list-desc {
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .42rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	 }   
</style>
