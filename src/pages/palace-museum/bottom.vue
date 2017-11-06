<template>
	<div class="recomment">
		<h2>看了该景点的人还看了</h2>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_228x168_3df8efda.jpg">
				<div class=" recomment-info">
					<h3>天安门广场</h3>
					<div class="recomment-price">
						￥
						<em>40</em>
						<span>起</span>
					</div>
					<div class="recomment-num">
						<i>BBBBB</i>
						<span>12234条评论</span>
					</div>
					<div class="recomment-position">
						北京.东城区
					</div>
				</div>
			</div>
		</div>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_228x168_ec8547e9.jpg">
				<div class=" recomment-info">
					<h3>恭王府(5A)</h3>
					<div class="recomment-price">
						￥
						<em>20</em>
						<span>起</span>
					</div>
					<div class="recomment-num">
						<i>BBBBB</i>
						<span>12234条评论</span>
					</div>
					<div class="recomment-position">
						北京.东城区
					</div>
				</div>
			</div>
		</div>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_228x168_bf40890b.jpg">
				<div class=" recomment-info">
					<h3>天坛公园(5A)</h3>
					<div class="recomment-price">
						￥
						<em>16.9</em>
						<span>起</span>
					</div>
					<div class="recomment-num">
						<i>BBBBB</i>
						<span>12234条评论</span>
					</div>
					<div class="recomment-position">
						北京.东城区
					</div>
				</div>
			</div>
		</div>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_228x168_9d25e6f0.jpg">
				<div class=" recomment-info">
					<h3>什刹海(5A)</h3>
					<div class="recomment-price">
						￥
						<em>50</em>
						<span>起</span>
					</div>
					<div class="recomment-num">
						<i>BBBBB</i>
						<span>12234条评论</span>
					</div>
					<div class="recomment-position">
						北京.东城区
					</div>
				</div>
			</div>
		</div>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="http://img1.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_228x168_6572dd12.jpg">
				<div class=" recomment-info">
					<h3>鸟巢(5A)</h3>
					<div class="recomment-price">
						￥
						<em>25</em>
						<span>起</span>
					</div>
					<div class="recomment-num">
						<i>BBBBB</i>
						<span>12234条评论</span>
					</div>
					<div class="recomment-position">
						北京.东城区
					</div>
				</div>
			</div>
		</div>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_228x168_8bb97036.jpg">
				<div class=" recomment-info">
					<h3>圆明园(4A)</h3>
					<div class="recomment-price">
						￥
						<em>40</em>
						<span>起</span>
					</div>
					<div class="recomment-num">
						<i>BBBBB</i>
						<span>12234条评论</span>
					</div>
					<div class="recomment-position">
						北京.东城区
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style>
	.recomment{
		margin-top: .2rem;
	    margin-bottom: .4rem;
	    position:relative;
	    background: #F2F2F2;
	  	margin-bottom: .1rem;
	}
	.recomment h2{
		padding: 0 .2rem;
	    height: .88rem;
	    background: #fff;
	    color: #333;
	    font-size: .3rem;
	    line-height: .88rem;
	    text-indent: .2rem;
    }
    .recomment-list{
	    overflow: hidden;
	    background: #fff;
    }
    .recomment-list img{
	    margin: .2rem .2rem 0 .2rem;
	    width: 1.62rem;
	    height: 1.62rem;
	    float: left;
	    vertical-align: middle;
	    cursor: pointer;
    }
    .recomment-info{
	    position: relative;
	    padding-top: .2rem;
	    margin-left: 2.02rem;
	    height: 1.8rem;
    }
    .recomment-info  h3{
	    position: absolute;
	    top: .2rem;
	    left: 0;
	    right: 1.5rem;
	    height: .4rem;
	    line-height: .4rem;
	    font-size: .3rem;
	    color: #212121;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
    }
    .recomment-price{
	    position: absolute;
	    right: .2rem;
	    top: .2rem;
	    line-height: .4rem;
	    vertical-align: baseline;
	    color: #ff9800;
    }
    .recomment-price em{
    	font-size: .36rem;
    }
    .recomment-price span{
       color: #9e9e9e;
    }
    .recomment-num {
    	color: #00bcd4;
    	position: absolute;
    	top: 1rem;
    	left: 0;
    }
    .recomment-num span{
	    margin-left: .1rem;
	    line-height: .28rem;
	    font-size: .24rem;
	    vertical-align: middle;
	    color: #9e9e9e;
	    margin-top: .1rem;
	    
    }
    .recomment-position {
	    padding: 1.3rem  .04rem  0 .1rem;
	    position: absolute;
	    color: #9e9e9e;
	    font-size:  .24rem;
    }
</style>
