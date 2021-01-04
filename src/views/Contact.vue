<template>
  <div class="contact">
    <div class='title'>
      <h4>联系方式</h4>
      <p>Contact information</p>
    </div>
    <div class='continer '>
      <div class='img ani' swiper-animate-effect="fadeInDownBig zoomIn" swiper-animate-duration="1s">
        <img src="../assets/img/map.png" alt="">
      </div>
      <div class='msg ani' swiper-animate-effect="fadeInUpBig " swiper-animate-duration="2s">
        <p>
          <span class='border-right'>联系电话</span>
          <span class='padding-left'>0717-6388115</span>
        </p>
        <p>
          <span class='border-right'>人事邮箱</span>
          <span class='padding-left'>2415545236@qq.com</span>
        </p>
        <p>
          <span class='border-right'>公司地址</span>
          <span class='padding-left'>宜昌市伍家岗区伍临路33号6栋7层</span>
        </p>
        <p>
          <span class='border-right'>公司网址</span>
          <span class='padding-left'>www.ycsxncp.com</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .contact
    padding:$padding-medium
    .title
      border-bottom:1px solid #000
      display:flex
      padding:$padding-small-s 0
      h4
        flex:1
      p
        flex:1
        text-align right
        font-size:$font-size-medium-x 
        color:$color-text-7
    .continer
      margin-top:$margin-small
      .img
      .msg
        margin-top:$margin-medium
        animation-duration:1.5s
        p
          margin-bottom:$margin-small-s
          .border-right
            border-right:2px solid #777676
            padding-right: $padding-small
          .padding-left
            padding-left:$padding-small

</style>