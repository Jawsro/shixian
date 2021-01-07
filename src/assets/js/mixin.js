export const heightMixin={
  data(){
    return{
      showHeight: document.documentElement.clientHeight,//实时屏幕高度
      heightCss:true
    }
  },
  created(){
    // this.height()
  },
  methods:{
    height(){
      if(this.showHeight >610){
        this.heightCss = false
      }
    }
  }
}