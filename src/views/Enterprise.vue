<template>
  <div class="enterprise" :class="heightCss ? 'show-height' :'' ">
    <div class='title'>
      <h3>企业文化:</h3>
      <p>TEH ENTERPRISE CULTRE</p>
    </div>
    <div class='continer '>
      <div class='msg ani' swiper-animate-effect="fadeInUpBig " swiper-animate-duration="2s" swiper-animate-delay="0s">
       
       <div class='list'>
        <div class='small-title'>
          <span class='dian'></span>
          <h3 class='text'>卓越品质，精益求精</h3>
        </div>
        <p class='list-text'>
          所有食材从源头着手，通过专业检测，严格筛选。确保丰富、新鲜、健康！
        </p>
       </div>

        <div class='list'>
        <div  class='small-title'>
          <span class='dian'></span>
          <h3 class='text'>以人为本，超服务</h3>
        </div >
        <p class='list-text'>
          以专业赢得市场，不论新客老客，不论需求大小，不论配送远近，我们都将按客户要求保质保量，准时准点的完成。
        </p>
       </div>

       <div class='list'>
        <div class='small-title'>
          <span class='dian'></span>
          <h3 class='text'>光荣使命，能力越大责任越大</h3>
        </div >
        <div class='list-text'>
          <p>架起一座连接农村“田间地头”和消费者“餐桌”之间的桥梁。</p>
          <p>为消费者提供优质安全的农产品，促进区域经济的快速发展。</p>
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
  name: "Enterprise"
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .show-height
    height:$height
    overflow-y:scroll
  .enterprise
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
        .list
          margin-top:12%
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