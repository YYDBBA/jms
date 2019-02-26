import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Communication from '@/pages/Communication'
import Personal from '@/pages/Personal'
import Detail from '@/pages/Detail'

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
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
