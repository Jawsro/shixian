<template>
  <div class='index'>
    <div class='logo'>
      <img src="../assets/img/logo.jpg" alt="">
    </div>

    <div class='img ani' swiper-animate-effect="fadeInLeftBig" swiper-animate-duration="2s">
      <img src="../assets/img/img1.jpg" alt="">
    </div>

    <div class='text-img ani' swiper-animate-effect="fadeInRightBig" swiper-animate-duration="1s" swiper-animate-delay="1s">
      <img src="../assets/img/img2.jpg" alt="">
      <div class='textmsg'>
       <p class='font-small'> 宜昌时鲜农产品有限公司</p>
       <h2 class='font-big'>企业电子宣传册</h2>
      </div>
      
    </div>

    <div class='bottom-text ani' swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="2s">
      <p>绿色、智能、安全、便捷</p>
      <p>与时鲜携手，创优质生活</p>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "Index"
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .index
    .logo
      width:40%
      padding:$padding-medium 0 0 $padding-medium
    .img
      width:100%
      position:absolute
      top:21%
      left:0
      right:0
      text-align:right
      img
        width:85%
    .text-img
      width:85%
      position:absolute
      top:52%
      left:0
      right:0
      .textmsg
        position:absolute
        top:50%
        width:100%
        color:#fff
        height:80px
        margin-top:-40px
        .font-small
          font-size:21px
          padding-left:15px
          padding-bottom:5px
        .font-big
          font-size:32px
          padding-left:15px
    .bottom-text
      color:$color 
      text-align:center
      position:absolute
      bottom:50px
      left:0
      right:0
      p
        padding:0 0 $padding-small-s 0
        font-weight:$font-weight-blod
        font-size:$font-size-large
</style>