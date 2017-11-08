<template>
	<div>
		<div class="mp-header">
			<div class="mp-header">
				<a class="mp-header-left mp-iconfont iconfont icon-back"></a>
				<h1 class="mp-header-title">订单填写</h1>
				<a class="mp-header-right">登录</a>
			</div>
		</div>
		<div class="border-bottom">

			<div class="info-left">
				<div class="info-main">
					<h2 class="info-title">【上午场】故宫成人票凭身份证入园</h2>

					<ul class="info-taglist">
						<li class="info-tagitem"><img class="info-tagicon" src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">2017-11-11</li>
						<li class="info-tagitem"><img class="info-tagicon" src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png">条件退</li>
					</ul>

					<ul class="info-taglist">
						<li class="info-tagitem" id="latest-refund"></li>
					</ul>

				</div>
			</div>

			<div class="info-right">
				<div class="info-price">
					<span class="price">¥<em class="price-num">40</em></span>
					<span>起/张</span>
				</div>
				<div class="info-note">预订须知</div>
			</div>

		</div>

		<!-- 点击修改用户数量-->
		<div class="number-limit">
			<label class="row-field">购买数量</label>
			<span class="limit-desc">最多买5张</span>

			<div class="inputBtnCon">

				<span :class="{inputBtnMin:true, minunuse:backColor }" @click='handleClickMin'>
            		<span class="inputBtnAlign"></span>
				</span>
				<input type="tel" v-model="counter" class="inputInp" @keyup='handleInp' max="5" min="1">
				<span :class="{inputBtnAdd:true, addunuse:backColor1 }" @click='handleClickAdd'>
            		<span class="inputBtnAlign">
            			<span class="inputBtnValign"></span>
				</span>
				</span>

			</div>
		</div>
		<ul class='personMsg' v-for='item in (counter) '>
			<li>
				<label :for='"vistorName"+item'>游客{{item}}</label><input type="text" placeholder="游客姓名" :id='"vistorName"+item' ref='inp1' @blur='handleNameblur' @focus='handleNamefouce'>
			</li>
			<li v-if="item==1">
				<label for="vistorTel">手机号</label><span class="countryNumber">+86></span><input type="text" placeholder="请填写手机号" id="vistorTel" :class="{InpWarn:noInp}" @blur='handleTelblur' @focus='handleTelfouce'>
			</li>
			<li>
				<label :for='"vistorId"+item'>身份证</label><input type="text" placeholder="请填写正确的身份证号码" :id='"vistorId"+item' :class="{InpWarn:noInp}" @blur='handleIdblur' @focus='handleIdfouce'>
			</li>

		</ul>

		<p class="hotline"> 咨询电话</p>

		<div class="control-outer">
			<div class="booking-intro">

				<em class="mp-booking-light">产品价格</em>

				<strong class="mpg-price">
                         ¥<em class="mpg-price-num">{{price}}</em>
                    </strong>
			</div>
			<a class="booking-btn">提交订单</a>
		</div>
	</div>
	</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				counter: 1,
				backColor: true,
				backColor1: false,
				price: 40,
				noInp: false
			}
		},

		methods: {

			handleClickMin: function() {
				if(this.counter > 1) {
					this.counter = parseInt(this.counter) - 1;
					this.backColor1 = false;

				}
				if(this.counter <= 1) {
					this.backColor = true;
				}
				this.price = 40 * this.counter;
			},
			handleClickAdd: function() {
				if(this.counter >= 5) {
					this.counter = 5;
					this.backColor1 = true;
				} else {
					this.counter = parseInt(this.counter) + 1;
					this.backColor = false;
				}
				this.price = 40 * this.counter;
			},
			handleInp: function() {
				if(this.counter > 5) {
					this.counter = 5;
					this.backColor1 = true;
					this.backColor = false;

				}
				if(this.counter < 2) {
					this.counter = 1;
					this.backColor = true;
					this.backColor1 = false;

				}
				this.price = 40 * this.counter;

			},
			handleNameblur: function(e) {
				if(e.target.value == "") {
					e.target.value = "游客姓名";
					e.target.style.color = "red";
				}
			},
			handleNamefouce: function(e) {
				if(e.target.value == "游客姓名") {
					e.target.value = "";
					e.target.style.color = "#000";
				}
			},
			handleTelblur: function(e) {
				if(e.target.value == "") {
					e.target.value = "请填写手机号";
					e.target.style.color = "red";
				}
			},
			handleTelfouce: function(e) {
				if(e.target.value == "请填写手机号") {
					e.target.value = "";
					e.target.style.color = "#000";
				}
			},
			handleIdblur: function(e) {
				if(e.target.value == "") {
					e.target.value = "请填写正确的身份证号码";
					e.target.style.color = "red";
				}
			},
			handleIdfouce: function(e) {
				if(e.target.value == "请填写正确的身份证号码") {
					e.target.value = "";
					e.target.style.color = "#000";
				}
			}

		}
	}
</script>

<style>
	body,
	html {
		background: #f5f5f5;
	}
	
	.mp-header {
		position: relative;
		height: .88rem;
		background: #00bcd4;
		z-index: 91;
	}
	
	.mp-header-left {
		position: absolute;
		left: 0;
		top: 0;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		font-size: .36rem;
		color: #fff;
		text-align: center;
	}
	
	.mp-iconfont {
		font-family: 'mpiconfont';
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		-webkit-font-smoothing: antialiased;
	}
	
	.mp-header-title {
		overflow: hidden;
		margin: 0 1rem;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: .32rem;
		text-align: center;
		color: #fff;
	}
	
	.mp-header-right {
		position: absolute;
		top: 0;
		right: 0;
		width: 1rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
		font-size: .28rem;
		color: #fff;
	}
	
	.booking-intro {
		color: #ff9800
	}
	
	.mpg-price-num {
		font-size: .48rem;
	}
	
	.booking-btn {
		float: right;
		border: 0 none;
		background: #ff9800;
		color: #fff;
		font: normal .36rem/1rem Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;
		text-align: center;
		width: 50%;
	}
	
	.booking-intro {
		position: relative;
		float: left;
		font-size: .24rem;
		line-height: 1rem;
		text-indent: .2rem;
	}
	
	.control-outer {
		position: fixed;
		z-index: 92;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		background: #fff;
	}
	
	.personMsg {
		margin-bottom: 0.2rem;
	}
	
	.personMsg li {
		overflow: hidden;
		min-height: .5rem;
		padding: .24rem;
		background: #fff;
		border-bottom: 0.02rem solid #eee;
	}
	
	.personMsg li label {
		width: 1.6rem;
		display: block;
		float: left;
		line-height: 0.5rem;
	}
	
	.personMsg li .addressList {
		float: right;
		line-height: 0.5rem;
		color: #00afc7;
	}
	
	.personMsg li input {
		border: none;
	}
	
	.InpWarn {
		color: red;
	}
	
	.personMsg li .countryNumber {
		display: block;
		float: left;
		border: 1px solid #ccc;
		color: #ccc;
		padding: 0.1rem 0.1rem;
		margin-right: 0.15rem;
	}
	
	.hotline {
		color: #00afc7;
		text-align: right;
		font-size: .24rem;
		line-height: .4rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: 2rem;
	}
	
	.number-limit {
		padding: .3rem .2rem .3rem .2rem;
		overflow: hidden;
		min-height: .5rem;
		background: #fff;
		margin: 0.2rem 0;
	}
	
	.inputBtnMin,
	.inputBtnAdd {
		position: relative;
		display: block;
		width: .56rem;
		height: .56rem;
		margin: .02rem;
		background-color: #00afc7;
		float: left;
	}
	
	.minunuse {
		background-color: #eee;
	}
	
	.addunuse {
		background-color: #eee;
	}
	
	.inputInp {
		float: left;
		width: .6rem;
		height: .6rem;
		padding: 0 .06rem;
		border: 0 none;
		font: normal .28rem/.6rem arial;
		text-align: center;
		vertical-align: top;
	}
	
	.inputBtnCon {
		display: inline-block;
		position: relative;
		border: .02rem solid #c7ced4;
		float: right;
	}
	
	.inputBtnAlign {
		position: absolute;
		top: .26rem;
		left: .12rem;
		width: .3rem;
		height: .06rem;
		background: #fff;
	}
	
	.inputBtnValign {
		position: absolute;
		top: -.1rem;
		left: .12rem;
		width: .06rem;
		height: .28rem;
		background: #fff;
	}
	
	.row-field {
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .5rem;
	}
	
	.limit-desc {
		position: absolute;
		left: 1.6rem;
		margin-right: 2.1rem;
		color: #ccc;
		font-size: .28rem;
	}
	
	.border-bottom {
		position: relative;
		overflow: hidden;
		min-height: 1.1rem;
		padding: .2rem .2rem .1rem .2rem;
		background: #fff;
	}
	
	.info-left {
		margin-right: 1.9rem;
		float: left;
	}
	
	.info-title {
		color: #212121;
		font-size: .32rem;
		line-height: .44rem;
		margin-bottom: .04rem;
	}
	
	.info-taglist {
		margin-left: -.2rem;
		overflow: hidden;
	}
	
	.info-tagitem {
		float: left;
		line-height: .44rem;
		margin-left: .2rem;
		color: #616161;
		font-size: .24rem;
	}
	
	.info-tagicon {
		position: relative;
		top: .08rem;
		width: .24rem;
		height: .24rem;
		margin-right: .08rem;
		vertical-align: top;
	}
	
	.info-right {
		position: absolute;
		right: .2rem;
		top: .2rem;
		width: 1.8rem;
		text-align: right;
	}
	
	.info-price {
		height: .44rem;
		line-height: .44rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	
	.price-num {
		margin-left: .04rem;
		font-size: .4rem;
	}
	
	.price {
		color: #ff8300;
	}
	
	.info-note {
		margin-top: .12rem;
		line-height: .32rem;
		color: #00bcd4;
		font-size: .28rem;
	}
</style>