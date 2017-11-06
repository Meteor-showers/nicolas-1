<template>
	<div class="nav-container">	
	    <swiper :options="swiperOption" ref="mySwiper">
	    	<swiper-slide>
	    		<div class="nav-swiper">
	    			<ul>
	    				<li class = "nav-img">
	    					<p class="nav-img1"><img class="nav-img-con" src="../img/ace00878a52d9702.png" alt="景点门票"></p>
	    					<p class="keywords">景点门票</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class="nav-img1"><img class="nav-img-con" src="../img/2640cab202c41b02.png" alt="动植物园"></p>
	    					<p class="keywords">动植物园</p>
	    				</li>
	    				<router-link to="/palace-museum">
		    				<li class = "nav-img">
		    				<p class = "nav-img1"><img class="nav-img-con" src="../img/2640cab202c41b02.png" alt="故宫"></p>
		    				<p class="keywords">故宫</p>		   
		    				</li>
	    				</router-link>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/ffc620dbda9b9c02.png" alt="一日游"></p>
	    					<p class="keywords">一日游</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/569d3c096e542502.png" alt="必游榜单"></p>
	    					<p class="keywords">必游榜单</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/a8a8d9023a814c02.png" alt="秋色美"></p>
	    					<p class="keywords">秋色美</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/e09575e66f4aa402.png" alt="游乐场"></p>
	    					<p class="keywords">游乐场</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/83f636bd75ae6302.png" alt="泡温泉"></p>
	    					<p class="keywords">泡温泉</p>
	    				</li>
	    			</ul>
	    		</div>
	    	</swiper-slide>
	   		<swiper-slide>
	   			<div class="nav-swiper">
	   				<ul>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/b1ea3c8c7fb6db02.png" alt="城市风光"></p>
	    					<p class="keywords">城市风光</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/c16cd064d85d8502.png" alt="玻璃栈道"></p>
	    					<p class="keywords">玻璃栈道</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/a8a8d9023a814c02.png" alt="名胜古迹"></p>
	    					<p class="keywords">名胜古迹</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/71eb19f77e3f21f7.png" alt="周边游"></p>
	    					<p class="keywords">周边游</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/07f33cc087f18d02.png" alt="自然风光"></p>
	    					<p class="keywords">自然风光</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/8cb1dce519375d02.png" alt="古北水镇"></p>
	    					<p class="keywords">古北水镇</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/9285073fde1eb702.png" alt="经典讲解"></p>
	    					<p class="keywords">经典讲解</p>
	    				</li>
	    				<li class = "nav-img">
	    					<p class = "nav-img1"><img class="nav-img-con" src="../img/a70e61e1f57ee302.png" alt="全部"></p>
	    					<p class="keywords">全部</p>
	    				</li>
	    			</ul>
	   			</div>
	   		</swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>




<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	  	export default {
	    	data() {
				return {
					swiperOption: {
	          		direction: 'horizontal',
	         			autoHeight: true,
	          		pagination: '.swiper-pagination',
	        			observeParents: true,
	        		}
	      		} 
	    	},
	    	components: {
	      		swiper,
	    		swiperSlide
			}
		}
</script>



<style scoped>
	.nav-container {
		overflow: hidden;
		width: 100%;
		height: 3.8rem;
	}
	.nav-swiper {
		width:100%;
		height:3.8rem;
	}
	.nav-img {
		float:left;
		width:25%;
		padding-top:.3rem;
	}
	.nav-img1{
		text-align: center;
	}
	.nav-img-con {
		width:.66rem;
		height:.66rem;
	}
	.keywords {
		width: 80%;
		margin-top:.2rem;
		margin-left: 10%;
		font-size:.28rem;
		text-align: center;
		color:#212121;
		white-space:nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		
	}
	.swiper-pagination-bullet {
		background: rgba(144,144,144,.8);
	}
</style>