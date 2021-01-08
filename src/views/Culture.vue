<template>
  <div class='culture' :class="heightCss ? 'show-height' :'' ">
    <div class='title'>
      <h3>企业风采:</h3>
      <p>THE ENTERPRISE CULTURE</p>
    </div>
    <div class='continer '>
      <div class='imgs'>
        <div class='ani'
              swiper-animate-effect="fadeInDownBig" 
              swiper-animate-duration="1s">
          <img src="../assets/img/culture-img1.jpg" alt="">
        </div>

      <div class='middle'>
        <div class='left ani'
              swiper-animate-effect="fadeInLeftBig" 
              swiper-animate-duration="1s"
              swiper-animate-delay="1s">
          <img src="../assets/img/culture-img2.jpg" alt="">
        </div>
        <div class='right ani'
              swiper-animate-effect="fadeInRightBig" 
              swiper-animate-duration="1s"
              swiper-animate-delay="2s">
          <div class='right_img1'>
            <img src="../assets/img/culture-img3.jpg" alt="">
          </div>
          <div class=''>
            <img src="../assets/img/culture-img4.jpg" alt="">
          </div>
        </div>
      </div>

       <div class='lastimg ani'
              swiper-animate-effect="fadeInUpBig" 
              swiper-animate-duration="1s"
              swiper-animate-delay="3s">
        <img src="../assets/img/culture-img5.jpg" alt="">
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
  name: "Culture"
};
</script>
<style lang="stylus" scoped>
 @import "../assets/css/common.styl"
  .imgs::-webkit-scrollbar
    display: none 
  .show-height
    height:$height
    overflow-y:scroll 
  .culture
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
      .imgs
        main() 
        .middle
          display:flex
          margin-top:6px
          .left
            flex:1
            margin-right:8px
          .right
            flex:1
            .right_img1
              margin-bottom:3px
        .lastimg
          margin-top:6px
          margin-bottom:20px
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