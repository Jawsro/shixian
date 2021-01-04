<template>
  <div id="app">
    <div class='top'>
      <img class='img1' src="https://res1.eqh5.com/FmLcyAXJ38gmU0ZwutT9CJ-Hh6ew?imageMogr2/auto-orient/thumbnail/320x99%3E/format/webp" alt="">
      <!--<img class='img2' src="https://res1.eqh5.com/FqFUnH2KK8ehsZMuPUfM8kEOmChV?imageMogr2/auto-orient/thumbnail/210x27%3E/format/webp"  alt="">-->
    </div>
    <div class='bottom'>
      <div class='text'>携手同行 · 共赢未来</div>
      <img class='img1' src="https://res1.eqh5.com/FmLcyAXJ38gmU0ZwutT9CJ-Hh6ew?imageMogr2/auto-orient/thumbnail/320x99%3E/format/webp" alt="">
      <!--<img class='img2' src="https://res1.eqh5.com/FqFUnH2KK8ehsZMuPUfM8kEOmChV?imageMogr2/auto-orient/thumbnail/210x27%3E/format/webp"  alt="">-->
    </div>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #000
  .top
    height:27px
    .img1
      height:99px
      margin-top:-72px
      position:absolute
    .img2
      width:210px
      height:10px
      position:absolute
      top:20px
      z-index:100
  .bottom
    position:fixed
    bottom:0
    left:0
    right:0
    height:27px
    .text
      font-size:12px
      line-height:27px
      z-index:100
      position:absolute
      top:0
      color:#ecc083
      left:35px
    .img1
      height:27px
      position:absolute
    .img2
      width:210px
      height:5px
      position:absolute
      top:10px
      right:0
      z-index:100
</style>
