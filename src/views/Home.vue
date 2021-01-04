<template>
  <div class='home'>
     <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="title ani" swiper-animate-effect="slideInRight" swiper-animate-duration="2s">
          首页
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="2s">
          公司简介
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="title ani" swiper-animate-effect="slideInDown" swiper-animate-duration="2s">
          公司资质
        </div>
      </swiper-slide>
      <swiper-slide>
        <Contact></Contact>
      </swiper-slide>
     
      
      
      
  </swiper>
  </div>
</template>

<script>
  import Contact from "./Contact.vue";
  import * as swiperAni from '../assets/js/swiper.animate.min.js'
  export default {
    name: "Home",
    components:{Contact},
    data() {
      return {
        swiperOption: {
            loop: true,
            on: {
              init: function () {
                swiperAni.swiperAnimateCache(this)
                swiperAni.swiperAnimate(this)
              },
              slideChange: function () {
                swiperAni.swiperAnimate(this)
              }
            }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
     
  };
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
</style>