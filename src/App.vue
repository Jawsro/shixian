<template>
  <div id="app">
    <div class='yinyue' @click='play()'>
      <audio src="./assets/img/bg1.mp3" autoplay loop='loop' id="video"></audio>
    </div>
    <router-view />
  </div>
</template>
<script>  
   export default {
      data() {
          return {
              
          }
      },
      methods: {
        play(){
            let vo = document.getElementById("video")
            if( vo.autoplay == true){
              vo.autoplay = false
              vo.play()
            }else{
              vo.autoplay = true
              vo.pause()
            }
            
        }
      }
  }
</script>
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
  background:url("./assets/img/bg.jpg") center center no-repeat
  background-size: contain
  .yinyue
    width:30px
    height:30px
    position:absolute
    top:35px
    right:5px
    z-index:9
    background:url("./assets/img/muise.png") center center no-repeat
    background-size: contain
    animation: animations1 10s linear infinite forwards
	  animation-play-state: paused
    



@keyframes animations1 {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}

	50% {
		transform: translate(-50%, -50%) rotate(180deg);
	}
	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
</style>
