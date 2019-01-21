import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// import './assets/styles/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
