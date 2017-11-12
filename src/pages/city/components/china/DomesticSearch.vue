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
			chinacity(){
				return this.$store.state.city.chinacity;
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
				for (var i = 0,l=this.chinacity.length;i<l;i++) {
					for(var j=0;j<this.chinacity[i][1].length;j++){
						var name  = this.chinacity[i][1][j].cityarea;
						var pinyin = this.chinacity[i][1][j].itemName;
						if(name.indexOf(this.searchKey)!=-1 || pinyin.toLowerCase().indexOf(this.searchKey.toLowerCase())!=-1){
					 	searchresult.push(this.chinacity[i][1][j]);
					 }
					}
				}
				if(searchresult.length == 0){
						searchresult.push({
							cityarea:'无搜索匹配城市'
						});
				}
				this.searchResult=searchresult;
			}
		}
	}
</script>

<style>

</style>