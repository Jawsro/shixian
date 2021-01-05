<template>
  <div id="app">

    <!--<div class='bottom'>
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
    </div>-->
    <router-view />
  </div>
</template>

<style lang="stylus">
@import "./assets/css/common.styl"
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #000
  position:absolute
  top:0
  left:0
  right:0
  bottom:0
</style>
