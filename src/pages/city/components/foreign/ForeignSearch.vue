<template>
	<div>
		<div class="city-header-keyword">
			<input type="text" placeholder="输入城市名或拼音" class="city-keyword" @keyup="searchCity" v-model="searchKey"/>
 		</div>
 		<div class="search-result" v-show="hide">
 			<ul>
 				<li v-for="list in searchResult" :key="list.id">{{list.cityarea}}</li>
 			</ul>
 		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				hide:false,
				searchKey:'',
				searchResult:[]
			}
		},
		computed: {
			foreigncity(){
				return this.$store.state.city.foreigncity;
			}
		},
		methods: {
			searchCity(){
				this.hide=true;
				if(!this.searchKey){
					this.hide=false;
				}
				var hide = this.hide;
				this.$emit('handleChangeShow',{
					hide
				})
				var searchresult = [];				
				for (var i = 0,l=this.foreigncity.length;i<l;i++) {
					for(var j=0;j<this.foreigncity[i][1].length;j++){
						var name  = this.foreigncity[i][1][j].cityarea;
						var pinyin = this.foreigncity[i][1][j].itemName;
						if(name.indexOf(this.searchKey)!=-1 || pinyin.toLowerCase().indexOf(this.searchKey.toLowerCase())!=-1){
					 	searchresult.push(this.foreigncity[i][1][j]);
					 }
					}
				}
				this.searchResult=searchresult;
			}
		}
	}
</script>

<style>

</style>