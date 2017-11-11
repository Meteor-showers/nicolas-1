<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<index-icon-swiper/>
 		<Acitivity-view />
 		<index-hotsale />
 		<weekend-content  />

 	</div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SwiperComponent from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import ActivityComponent from "./components/activity";
import Recommend from "./components/RecommendList";
import WeekendComponent from "./components/Weekend";
import axios from "axios";

export default {

	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"index-icon-swiper":IconSwiper,
		"Acitivity-view": ActivityComponent,
		"index-hotsale":Recommend,
		"weekend-content": WeekendComponent
//		"lazy-content": LazyComponent,

//		"week-content": WeekComponent
	},
	methods: {

		getHomeData() {
			axios.get('/static/index.json')
				.then(this.handleGetDataSucc.bind(this))
				.catch(this.handleGetDataErr.bind(this))
		},
		handleGetDataSucc(response) {
			if (response.status === 200) {
				const {data} = response.data;
				this.swiperInfo = data.swiperInfo;
				this.IconSwiper = data.IconSwiper;
				this.acitivityInfo = data.acitivityInfo;
			}
		},
		handleGetDataErr(err) {
			console.log(err);
		}

//		"Acitivity-view": ActivityComponent,


	},
	mounted() {

		if (this.$store.getters.shouldGetData) {
		this.$store.dispatch("getIndexInfo");

		}

	}
}

</script>

<style>
</style>
