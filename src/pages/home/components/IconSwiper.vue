<template>
	<div class="nav-container">	
	    <swiper :options="swiperOption" ref="mySwiper">
	    	<swiper-slide v-for="item in IconSwiper" :key="item.id">
	    	<router-link to="/list">
	    		<div class="nav-swiper">
	    			<ul>
	    				<li class = "nav-img">
	    					<p class="nav-img1"><img class="nav-img-con" :src="item.imgUrl" alt="景点门票"></p>
	    					<p class="keywords">{{item.Intro}}</p>
	    				</li>	    				
	    			</ul>
	    		</div>
	    	</router-link>
	    	</swiper-slide>
	    	<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>




<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	  	export default {
	  		props: ['IconSwiper'],
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