 <template>
 	<div class="prddetail-group">
 		<div class="tab ">
 			<div class="tab-item tab-active">行程介绍</div>
 			<div class="tab-item">费用声明</div>
 			<div class="tab-item">使用说明</div>
 		</div>
 	</div>
 </template>
 
 <script>
 	
 	export default {
 		
 	}
 </script>
 
<style >
	.prddetail-group{
		margin-top: .2rem;
	    padding: .01rem 0;
	    
	}
	.tab{
		overflow: hidden;
	    margin-bottom: -.2rem;
	    /*background: #fff;*/
	    position:absolute;
	    font-size:.28rem;
	    line-height:1;
	    display:flex;
	    width:100%;
	    
	}
	.tab-active{
		position: relative;
	    border-bottom: .04rem solid #00afc7;
	    color: #00afc7;
	}
	.tab-item{
		display: block;
	    height: .4rem;
	    /*padding: .2rem 0;*/
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	    text-align: center;
	}
	.tab-active{
		
	}
</style>