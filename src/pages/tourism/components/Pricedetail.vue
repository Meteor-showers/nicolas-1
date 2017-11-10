<template>
	<div class="prddetail-group">
		<h3 class="prddetail-title border-bottom">
			费用及退款说明
		</h3>
		<div class="prddetail-content">
			<h4 class="prddetail-subtitle">费用包含</h4>
			<div class="border structure-list">
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">门票</h4>
					<p class="structure-desc">
						1、故宫博物院首道大门票；
						<br>
						2、八达岭长城门票；
						<br>
						3、所有优惠群体按成人报名，持有效证件（学生证、身份证、户口本）行程结束后导游退优惠差价，实行多退少补，按儿童报名的超高要补现金半票；
						<br>
						4、故宫无线讲解器使用
					</p>
				</div>
				
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">交通</h4>
					<p class="structure-desc">
						全程空调旅游往返用车费用；
					</p>
				</div>
				
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">导游服务</h4>
					<p class="structure-desc">
						团队游览专业中文导游服务（自由活动除外）
					</p>
				</div>
				
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">儿童说明</h4>
					<p class="structure-desc">
						一、1.2米以下儿童不需要景区门票，但需要报名儿童价，儿童价含车位费、导游服务费；
						<br>
						二、实行多退少补，1.2米以上的学生按成人报名的，持户口本/身份证导游现场退半价优惠，超1.2米按儿童价报名的需补门票超高费用，半价故宫20，半价长城20；
						<br>
						三、证件说明：18周岁以上的学生必须持学生证方能享受优惠，18周岁以下只需户口本/身份证；
					</p>
				</div>
				
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">保险</h4>
					<p class="structure-desc">
						含旅行社责任险，不含旅游意外险；
					</p>
				</div>
			</div>
			
			<h4 class="prddetail-subtitle">费用不含</h4>
			<div class="border structure-list">
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">门票</h4>
					<p class="structure-desc">北京杜莎夫人蜡像馆门票170元/人，参加本行程可优惠购买60元/人大小同价，不参加可提前散团；</p>
				</div>
				
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">保险</h4>
					<p class="structure-desc">旅游人身意外险和其他额外消费</p>
				</div>
				
				<div class="structure-item border-top">
					<h4 class="structure-title border-right">其他</h4>
					<p class="structure-desc">其他私人消费</p>
				</div>
			</div>
			<h4 class="prddetail-subtitle">退款说明</h4>
			<p class="prddetail-desc">
				退款时间：使用日期截止前3天10:00前可以申请退款; 
				<br>
				1、提前3天10：00申请退款，全额退款。
				<br>
				1、超过提前3天10：00申请退款，因为已经正常安排，费用不退。。 
				<br>
			</p>
		</div>
		
	</div>
</template>

<script>
	export default {
 		
 	}
</script>

<style>
	.prddetail-group{
		margin-top: .2rem;
	    padding: .01rem 0;
	    background: #fff;
	}
	.prddetail-title {
	    overflow: hidden;
	    position: relative;
	    height: .84rem;
	    padding: 0 .2rem;
	    color: #212121;
	    font-size: .32rem;
	    line-height: .84rem;
	    text-indent: .16rem;
	    font-weight:normal;
	}
	.prddetail-content{
		overflow: hidden;
	    padding: 0 .24rem;
	    color: #616161;
	    font-size: .28rem;
	    line-height: .4rem;
	}
	.prddetail-subtitle{
		padding: .24rem 0 .1rem;
	    color: #ff8300;
	    font-size: .3rem;
	    line-height: .42rem;
	}
	.border{
		position:relative;
	}
	.structure-item{
		overflow: hidden;
	    position: relative;
	    color: #212121;
	    background: #f5f5f5;
	    font-size: .28rem;
	    line-height: .4rem;
    }
    .structure-title {
    	position:absolute;
	    top: 50%;
	    padding: .2rem 0;
	    width: 1.8rem;
	    text-align: center;
	    font-weight:normal;
    }
    .structure-desc{
	    margin-left: 1.8rem;
	    padding: .2rem;
	    background: #fff;
	    color: #616161;
	  }
    .prddetail-subtitle{
	    padding: .24rem 0 .1rem;
	    color: #ff8300;
	    font-size: .3rem;
	    line-height: .42rem;
	    font-weight:normal;
    }
    .border {
    	position: relative;
    }
    .structure-item {
	    overflow: hidden;
	    position: relative;
	    color: #212121;
	    background: #f5f5f5;
	    font-size: .28rem;
	    line-height: .4rem;
    }
    .structure-title {
    	position: absolute;
	    top: 50%;
	    padding: .2rem 0;
	    width: 1.8rem;
	    text-align: center;
    }
    .structure-desc{
        margin-left: 1.8rem;
	    padding: .2rem;
	    background: #fff;
	    color: #616161;
    }
    .prddetail-subtitle{
	    padding: .24rem 0 .1rem;
	    color: #ff8300;
	    font-size: .3rem;
	    line-height: .42rem;
	    font-weight:normal;
    }
    .prddetail-desc{
	    color: #616161;
	    word-wrap: break-word;
	    white-space: normal;
	    word-break: break-word;
    }
</style>