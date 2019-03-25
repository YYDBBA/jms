import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from './store/docs'
import vueLazyLoad from 'vue-lazyload'
// import pic from 'vue-directive-image-previewer'
// import 'vue-directive-image-previewer/dist/assets/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/title.css'
import 'animate.css'
// import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(vueLazyLoad,{
  loading:"./../static/loading-svg/loading-balls.svg"
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
