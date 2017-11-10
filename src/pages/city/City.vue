<template>
	<div>
 		<city-header @handleChange='handleChangeShow'/>
 		<city-china  v-if='show'/>
 		<city-foreign v-else/>
 	</div>
</template>

<script>
import CityHeader from "./components/CityHeader";
import CityChina from "./components/domestic";
import CityForeign from "./components/foreign";

export default {
	components: {
		"city-china": CityChina,
		"city-foreign": CityForeign,
		"city-header": CityHeader
	},
	data(){
		return {
			show:true
		}
	},
	methods: {
		handleChangeShow(e){
			this.show = e.show;
		}
	},
	mounted(){
		if(this.$store.getters.shouldCityData){
			this.$store.dispatch('getCityInfo');	
		}
	}
}
</script>


<style>
.city-header {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	overflow: hidden;
	height: .88rem;
	width: 100%;
	color: #fff;
	background: #00afc7;
}
.city-header-left {
	float: left;
	width: .4rem;
	padding: 0 .22rem;
	line-height: .88rem;
	font-size: .4rem;
	color: #fff;
}
.city-header-title{
	margin-left: 1rem;
	display: inline-block;
}
.city-header-title span{
	display: block;
    float: left;
    width: 2rem;
    height: .56rem;
    margin-top: .15rem;
    text-align: center;
    line-height: .56rem;
    font-size: .28rem;
    border: .02rem solid #fff;
    background: #00afc7;
}
.city-header-title span:nth-child(1){
	border-radius: 2px 0 0 2px;
}
.city-header-title span:nth-child(2){
	border-radius: 0 2px 2px 0;
}
.city-header-title .city-header-title-active{
	color: #00afc7;
	background: #fff;
}
.city-header-keyword{
	margin-top: .88rem;
    padding: 0 .2rem .1rem .2rem;
    font-size: .26rem;
    color: #9e9e9e;
    background: #00afc7;
    position: relative;
  }
.city-header-keyword .city-keyword{
	display: block;
    width: 100%;
    height: .3rem;
    padding: .16rem 0 .16rem .1rem;
    line-height: .3rem;
    text-align: center;
    background: #fff;
    border: 0;
    border-radius: .06rem;
}
.city-cityarea-title{
    padding-left: .3rem;
	line-height: .54rem;
    color: #616161;
    font-size: .26rem;
    background: #F5F5F5;
    border-bottom: 1px solid #E0E1E1;
}
.city-cityarea-content{
    overflow: hidden;

    background: #fff;
    border-bottom: 1px solid #E0E1E1;
}
.city-cityarea-content span{
   display: block;
   float: left;
   margin: 0.1rem;
   width: 29%;
   height: 0.56rem;
   overflow: hidden;
   text-align: center;
   line-height: 0.56rem;
   white-space: nowrap;
   text-overflow: ellipsis;
   border: 1px solid #D7D9DA;
   box-sizing: border-box;
   border-radius: 0.05rem;
}
.city-cityarea-content .cityitem-light{
   color: #00AFC7;
   border: 1px solid #00AFC7;
}
.city-cityarea-content ul{
	overflow-x: hidden;
	overflow-y: auto;
}
.city-cityarea-content ul li{
	padding-left: .2rem;
	font-size: .28rem;
	color: #212121;
	line-height: .76rem;
	border-bottom: 1px solid #C9CCCD;
}
.search-result{
	position: absolute;
	top: 1.6rem;
	z-index: 10;
	width: 100%;
	height: 100%;
	background: #f2f2f2;
}
.search-result ul li {
	padding-left: .2rem;
	font-size: .28rem;
	color: #212121;
	line-height: .76rem;
	background: #fff;
	border-bottom: 1px solid #C9CCCD;
}

.citys-aside-letter{
	position: fixed;
	right: 0;
	top: 3.58rem;
    width: 0.28rem;
}
.citys-aside-letter span{
	float: left;
    width: .28rem;
    height: 0.35rem;
    display: block;
	font-size: .28rem;
	text-align: center;
	color: #00afc7;
}

</style>
