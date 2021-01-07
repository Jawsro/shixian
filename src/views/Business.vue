<template>
  <div class="business" :class="heightCss ? 'show-height' :'' ">
    <div class='title'>
      <h3>业务范围:</h3>
      <p>BUSINESS SCOPE</p>
    </div>

    <div class='continer '>
      <div class='main'>
      <div class='list'>
        <div class='img-text'>
          <div class='img'>
            <img src="../assets/img/business-img1.jpg" alt="">
          </div>
          <div class='text'>
            <span>
              即时下单，及时配送。为客户提供智能、安全、便捷的购物方式及优质的购物体验。
            </span>
          </div>
        </div>
        <div class='small-title'>
          <span class='dian'></span>
          <span class='text'>线上平台</span>
        </div>
      </div> 

      <div class='list'>
        <div class='img-text'>
          <div class='img'>
            <img src="../assets/img/business-img2.jpg" alt="">
          </div>
          <div class='text'>
            <span>
              24小时专属客服，企业定制化服务。随时为客户提供种类丰富的绿色、新鲜食材。
            </span>
          </div>
        </div>
        <div class='small-title'>
          <span class='dian'></span>
          <span class='text'>线下渠道</span>
        </div>
      </div> 

      <div class='list'>
        <div class='img-text'>
          <div class='img'>
            <img src="../assets/img/business-img3.jpg" alt="">
          </div>
          <div class='text'>
            <span>
              专业配送团队，全程冷链运输。保质保量、准时准点。为客户提供最好的配送服务。
            </span>
          </div>
        </div>
        <div class='small-title'>
          <span class='dian'></span>
          <span class='text'>物流服务</span>
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
  name: "Business",
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .show-height
    height:$height
    overflow-y:scroll 
  .business
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
        margin-top:$margin-medium
        main()
        .list
          margin-top:$margin-large 
          .img-text
            display:flex
            margin-bottom:$margin-small-s
            .img
              flex:1
            .text
              flex:1
              margin-left:$margin-small
              line-height:26px
              font-size:$font-size-medium-x
              letter-spacing:$letter-spacing
          .small-title
            .dian
              display: inline-block
              width:10px
              height:10px
              background:$color-banckground
              border-radius:50%
              margin-right:$margin-small
            .text
              font-size:$font-size-medium-x
              font-weight:$font-weight-blod
              color:$color 
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