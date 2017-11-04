<template>
  <div>
    <div class="ico iconfont icon-fanhui"></div>
    <div class="imgs">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img class="img-con" src="./img/museum2.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum3.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum4.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum5.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum6.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum7.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum8.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum9.jpg"></swiper-slide>
            <swiper-slide><img class="img-con" src="./img/museum10.jpg"></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>     
  </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        data() {
          return {
            swiperOption: {
              direction: 'horizontal',
              setWrapperSize: true,
              pagination: '.swiper-pagination',
            }
          }
        },
        components: {
                swiper,
              swiperSlide
        }    
    }
</script>



<style>
    .ico{
        position: absolute;
        width: .6rem;
        height: .6rem;
        left: 0rem;
        top: 0rem;
        border-radius: .3rem;        
    }
    .icon-fanhui{
        text-align: center;
        line-height: .6rem;
        color: #fff;
        z-index: 100;
    }
    .img-con{
        width: 100%;
        height: 74.67%; 
    }
    .imgs{
        position: relative;
    }


</style>