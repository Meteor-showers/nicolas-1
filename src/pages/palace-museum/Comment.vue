<template>
	<div class="comment-container">
		<h2>用户评论</h2>
		<div class="comment-container-list">
			<div class="comment-container-item">
				<div class="comment-title">
					<i>BBBBB</i>
					<span>c*2&nbsp;&nbsp;2017-09-08</span>
					<p>直接把故宫所有需要买票的地方的票都买了，不用取票，直接刷身份证就可以进，很方便，这次去的时间可能不凑巧，最中央的几个大殿都不让进，只有钟表馆，珍宝馆还有其他的陈列文物的地方是允许进的，不过我对钟表馆里的各种钟表是欣赏不来的，珍宝馆里的玉石雕刻的确是很精巧，故宫一趟转下来腿都要断了。。真的是很大，光看没有什么感觉，只有转的时候才能真正体会到故宫的宏伟。</p>
					<ul>
						<li><img src="./images/1.jpg"></li>
						<li><img src="./images/2.jpg"></li>
						<li><img src="./images/3.jpg"></li>
						<li><img src="./images/4.jpg"></li>
						<li><img src="./images/5.jpg"></li>
						<li><img src="./images/6.jpg"></li>
					</ul>
				</div>
			</div>
		</div>
 		<div class="comment-container-list">
			<div class="comment-container-item">
				<div class="comment-title">
					<i>BBBBB</i>
					<span>c*2&nbsp;&nbsp;2017-09-08</span>
					<p>绝对应该到的一处景点，因为以前看网上评论忽略了要是从长安街，天安门进故宫，注意是单行，只许进不许出，西华门只是供工作人员出入，东华门，和神武门是出口，午门是进口，单向游玩，大家一定要注意，还有建议大家一定要卖珍宝馆和钟表馆的票，时间允许还是要请一个导游，注意要请经典专业的导游人员呦～售票窗口都有咨询～珍宝馆实际就是皇极殿，九龙壁就在那里，乾隆养老的地方呗，钟表馆就是奉先殿，门票建议网上预定，直接刷身份证很方便，最重要的是故宫每天最多接待8万人，遇到周六日，基本上午10点钟就没有门票啦，所以提前会好一些～</p>
					<ul>
						<li><img src="./images/7.jpg"></li>
						<li><img src="./images/8.jpg"></li>
						<li><img src="./images/9.jpg"></li>
						<li><img src="./images/10.jpg"></li>
						<li><img src="./images/11.jpg"></li>
						<li><img src="./images/12.jpg"></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="check-f">
 		查看全部评论
 		<span>F</span>
 	</div>
 	</div>
 	
</template>

<script>
export default {
	
}
</script>
<style>
	.comment-container {
	       margin-top: .2rem;
	       position: relative;
	        background: #f2f2f2;
	}
	.comment-container h2{
		padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
	    font-weight:normal;
    }
    .comment-title{
    	 background: #fff;
	    line-height: .6rem;
	    padding: .1rem  .2rem .3rem .2rem;
    }
    .comment-title i{
	    z-index: 2;
	    color: #00bcd4;
    }
    .comment-title span{
	    position: relative;
	    float: right;
	    top: .16rem;
	    margin-left: .2rem;
	    line-height: .28rem;
	    font-size: .24rem;
	    vertical-align: middle;
	    color: #212121;
    }
    .comment-title p{
    word-break: break-all;
    word-wrap: break-word;
    line-height: .42rem;
    font-size: .26rem;
    color: #616161;
	text-overflow: ellipsis;
    }
    
    
    .comment-title ul{
	    margin: .2rem  0 .1rem  0;
	    position: relative;
	    zoom: 1;
	    overflow: hidden;
    }
    .comment-title ul li{
	    float: left;
	    width: 33.33%;
	    margin-bottom: .1rem;
	    overflow:hidden;
    }
    .comment-title ul li img{
    	width:100%;
    	vertical-align: middle;
    	background-size: contain;
    	margin-left: .07rem;
    	margin-right: .07rem;
    }
    .check-f{
	    position: relative;
	    margin-top: -.02rem;
	    height: .8rem;
	    background: #fff;
	    color: #616161;
	    line-height: .8rem;
	    text-align: center;
	    z-index: 2;
	     margin-top: .1rem;
	    
    }
    .check-f span{
        margin-left: .1rem;
    	color: #616161;
    	font-size: .2rem;
    }
</style>
