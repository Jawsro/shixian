<template>
  <div class='home'>
     <swiper class="swiper" :options="swiperOption">
         
        
        

        <swiper-slide>
          <Index></Index>
        </swiper-slide>

        <swiper-slide>
          <Company></Company>
        </swiper-slide>

        <swiper-slide>
          <Enterprise></Enterprise>
        </swiper-slide>

        <swiper-slide>
          <Culture></Culture>
        </swiper-slide>

        <swiper-slide>
          <Business></Business>
        </swiper-slide>

        <swiper-slide>
          <Cooperate></Cooperate>
        </swiper-slide>

        <swiper-slide>
          <Contact></Contact>
        </swiper-slide>
        

        

        
      
        
   </swiper>
  </div>
</template>

<script>
  import Company from "./Company.vue";
  import Contact from "./Contact.vue";
  import Enterprise from "./Enterprise.vue";
  import Culture from "./Culture.vue";
  import Index from "./Index.vue";
  import Business from "./Business.vue";
  import Cooperate from "./Cooperate.vue";
  import * as swiperAni from '../assets/js/swiper.animate.min.js'
  export default {
    name: "Home",
    components:{
      Contact,
      Company,
      Enterprise,
      Index,
      Culture,
      Business,
      Cooperate
    },
    data() {
      return {
        swiperOption: {
            loop: true,
            // direction: 'vertical',
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
  .home
    height:100%
  .home /deep/ .swiper-container
    height:100%
  .home /deep/ .swiper-pagination-bullet-active
    background:#129044
</style>