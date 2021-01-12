<template>
  <div class="company" :class="heightCss ? 'show-height' :'' ">
    <div class='title'>
      <h3>企业简介:</h3>
      <p>COMPANY PROFILE</p>
    </div>
    <div class='continer '>
      <div class='main'>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide>
            <img src="../assets/img/banner1.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/banner.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/banner2.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <div class='msg ani' swiper-animate-effect="fadeInUpBig " swiper-animate-duration="2s" swiper-animate-delay="0s">
          <div class='pa'>
            <p>
            宜昌时鲜农产品有限公司是一家集新鲜蔬菜、鲜肉、冷冻食品、水产品、家禽、豆制品、调料品为一体的绿色、安全、高效的食品配送专业配送公司。致力于为宜昌市广大客户提供绿色、智能、安全、便捷的农产品配送服务，公司自2015年6月成立以来始终坚持以“与时鲜携手，创优质生活”为经营理念，以普及生态理念，引领健康消费为至上社会使命，竭力为广大消费群体提供为健康的食材和为优质的服务，使每一位顾客购买省心，食用放心。
            </p>
          </div>
        </div>
      </div>

    </div>

    <div class='bottom ani' swiper-animate-effect="fadeInLeft" swiper-animate-duration="2s">
      <div class='text'>
        <p class='text1'>
          合作共赢 一路同行
        </p>
        <p>
          <span class='margin-right'>
            E N T E R P R I S E
          </span> 
          <span>
            P U B L I C I T Y
          </span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  import { heightMixin } from '../assets/js/mixin';
  export default {
    mixins:[heightMixin],
    name: "Company",
    data() {
        return {
          swiperOption: {
              loop: true,
              autoplay: {
                delay: 3500,
                disableOnInteraction: false
              },
              centeredSlides: true,
              spaceBetween: 30,
              pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
          }
        }
      },
  };
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .main::-webkit-scrollbar
    display: none 
  .show-height
    height:$height
    overflow-y:scroll 
  .company
    padding: 0 $padding-medium 0
    .title
      padding:$padding-medium 0 0 0
      color:$color 
      h3
        padding:$padding-small-s 0
        font-size:$font-size-large 
      p
        font-size:$font-size-small
        font-weight:$font-weight-blod
    .continer
      container()
      .main
        main()
        .swiper
          height:auto
          img
            width:99%
            border:1px #fff solid
        .msg
          margin-top:$margin-large
          p
            margin-bottom:$margin-small-s
            line-height:$line-height
            font-size:$font-size-medium-x
            text-indent:2em
            letter-spacing:$letter-spacing
     .bottom
        position:absolute
        bottom:0
        right:0
        left:0
        color:$color 
        background:#fff
        z-index:9
        font-weight:$font-weight-blod
        padding-right:$padding-medium
        padding-bottom:$margin-medium 
        .text
          text-align:right
          .text1
            padding:2px 0
          .margin-right
            margin-right:$margin-small
</style>