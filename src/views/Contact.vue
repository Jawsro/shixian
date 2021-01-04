<template>
  <div class="contact">
    <div class='title'>
      <h3>联系方式:</h3>
      <p>CONTACT INFORMATION</p>
    </div>
    <div class='continer '>
      <div class='img ani' swiper-animate-effect="fadeInDownBig zoomIn" swiper-animate-duration="1s">
        <img src="../assets/img/map.png" alt="">
      </div>
      <div class='msg ani' swiper-animate-effect="fadeInUpBig " swiper-animate-duration="3s">
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
    
    <div class='bottom'>
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
export default {
  name: "Contact",
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .contact
    padding: 0 $padding-medium 0
    .title
      padding:$padding-small-s 0
      color:$color 
      h3
        padding:$padding-small-s 0
      p
        font-size:$font-size-small
        font-weight:$font-weight-blod
    .continer
      margin-top:$margin-small
      color:$color-text
      .msg
        margin-top:$margin-medium
        p
          margin-bottom:$margin-small-s
          .border-right
            border-right:2px solid #606060
            padding-right: $padding-small
          .padding-left
            padding-left:$padding-small
    .bottom
      margin-top:$margin-large
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