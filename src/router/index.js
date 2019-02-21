import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Communication from '@/pages/Communication'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/communication',
      name: 'Communication',
      component: Communication
    }
  ]
})
