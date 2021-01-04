import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import animated from 'animate.css';


Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(animated);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
