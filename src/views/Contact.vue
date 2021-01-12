<template>
  <div class="contact" :class="heightCss ? 'show-height' :'' ">
    <div class='title'>
      <h3>联系方式:</h3>
      <p>CONTACT US</p>
    </div>
    <div class='continer '>
     
      <div class='msg '>
         <div class='img ani' swiper-animate-effect="zoomIn" swiper-animate-duration="1s">
          <img src="../assets/img/map.png" alt="">
        </div>
        <div class='list ani' 
            swiper-animate-effect="fadeInUp" 
            swiper-animate-duration="1s"
            swiper-animate-delay="1s">
          <div class='text-color'>
            <span class='dian'></span>
            <span class='border-right'>联系电话</span>
          </div>
          <div class='padding-left' @click="callPhone()">
            <span class='tel'>
              {{phone}}
            </span>
          </div>
        </div>

         <div class='list ani'
              swiper-animate-effect="fadeInUp" 
              swiper-animate-duration="1s"
              swiper-animate-delay="2s">
          <div class='text-color'>
            <span class='dian'></span>
            <span class='border-right'>移动电话</span>
          </div>
          <div class='padding-left' @click='callTelephone()'>
             <span class='tel'>
              {{telephone}}（邹）
            </span>
          </div>
        </div>

        <div class='list ani'
            swiper-animate-effect="fadeInUp" 
            swiper-animate-duration="1s"
            swiper-animate-delay="3s">
          <div class='text-color'>
            <span class='dian'></span>
            <span class='border-right'>电子邮箱</span>
          </div>
          <div class='padding-left'>2415545236@qq.com</div>
        </div>

        <div class='list ani'
            swiper-animate-effect="fadeInUp" 
            swiper-animate-duration="1s"
            swiper-animate-delay="4s">
          <div class='text-color'>
            <span class='dian'></span>
            <span class='border-right'>公司地址</span>
          </div>
          <div class='padding-left'>宜昌市伍家岗区伍临路33号6栋7层</div>
        </div>

         <div class='list ani'
              swiper-animate-effect="fadeInUp" 
              swiper-animate-duration="1s"
              swiper-animate-delay="5s">
          <div class='weixin-img' >
            <img src="../assets/img/weixin.png"  alt="">
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
  name: "Contact",
  data(){
    return{
      phone:'0717-6388115',
      telephone:'1899589737'
    }
  },
  methods:{
    callPhone(){
       window.location.href = 'tel://' + this.phone
    },
    callTelephone(){
      window.location.href = 'tel://' + this.telephone
    }
  }
};
</script>
<style lang="stylus" scoped>
  @import "../assets/css/common.styl"
  .msg::-webkit-scrollbar
    display: none 
  .show-height
    height:$height
    overflow-y:scroll 
  .contact
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
        .img
          margin-bottom:$margin-medium
        .list
          margin-top:$margin-small 
          .text-color
            margin-bottom:$margin-small-s
            .dian
              display: inline-block
              width:10px
              height:10px
              background:$color-banckground
              border-radius:50%
            .border-right
              padding-left: $padding-small
              color:$color
              font-weight:$font-weight-blod
              font-size:$font-size-medium-x
          .padding-left
            padding:$padding-small-s 0 $padding-small-s $margin-large
            letter-spacing:$letter-spacing
            font-size:$font-size-medium
            .tel
              color:#129044
              display:inline-block
              border-bottom:1px #129044 dashed
          .weixin-img
            width:120px
            margin:0 auto
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