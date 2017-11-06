<template>
	<div class="recomment">
		<h2>看了该景点的人还看了</h2>
		<div class="recomment-list">
			<div class="recomment-list-item">
				<img src="./img/01.jpg">
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
				<img src="./img/02.jpg">
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
				<img src="./img/03.jpg">
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
				<img src="./img/04.jpg">
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
				<img src="./img/05.jpg">
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
				<img src="./img/06.jpg">
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
