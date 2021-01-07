<template>
  <div class="cooperate" :class="heightCss ? 'show-height' :'' ">
    <div class='title'>
      <h3>合作企业:</h3>
      <p>COOPERATE ENTERPRISE</p>
    </div>
    <div class='continer '>
      <div class='msg ani' swiper-animate-effect="fadeInUpBig " swiper-animate-duration="2s" swiper-animate-delay="0s">
       
       <div class='list list1'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>湖北武警宜昌支队</h3>
          </div>
          <p class='list-text'>
            合作时间：2019年03月——至今
          </p>
       </div>

        <div class='list'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>宜昌市机关事务服务中心</h3>
          </div>
          <p class='list-text'>
            合作时间：2019年03月——至今
          </p>
       </div>

       <div class='list'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>宜昌高新区白洋小学</h3>
          </div>
          <div class='list-text'>
            合作时间：2019年03月——至今
          </div>
       </div>

        <div class='list'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>宜昌市夷陵区机关事务服务中心机关</h3>
          </div>
          <p class='list-text'>
            合作时间：2019年07月——至今
          </p>
       </div>

       <div class='list'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>宜昌市高新区管委会机关</h3>
          </div>
          <p class='list-text'>
            合作时间：2019年09月——至今
          </p>
       </div>

       <div class='list'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>宜昌市三峡大学</h3>
          </div>
          <p class='list-text'>
            合作时间：2020年08月——至今
          </p>
       </div>

       <div class='list'>
          <div class='small-title'>
            <span class='dian'></span>
            <h3 class='text'>湖北交投紫云铁路有限公司</h3>
          </div>
          <p class='list-text'>
            合作时间：2020年09月——至今
          </p>
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
  name: "Cooperate",
 
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .show-height
    height:$height
    overflow-y:scroll
  .cooperate
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
      .msg
        main()
        margin-top:4%
        .list1
          margin-top:0 !important
        .list
          margin-top:4%
          .small-title
            .dian
              display: inline-block
              width:10px
              height:10px
              background:$color-banckground
              border-radius:50%
            .text
              margin-left:$margin-small-s
              color:$color
              font-size:$font-size-medium-x
              display:inline-block
          .list-text
            line-height:$line-height
            padding:$padding-small-s 0
            letter-spacing:$letter-spacing
            font-size:$font-size-medium
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