import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/Home'
// import Communication from '@/pages/Communication'
// import Personal from '@/pages/Personal'
// import Detail from '@/pages/Detail'
// import End from '@/pages/End'
// import No from '@/pages/404'

Vue.use(Router);


//路由懒加载
let Home = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Home'))
  })
};
let Communication = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Communication'))
  })
};
let Personal = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Personal'))
  })
};
let Detail = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Detail'))
  })
};
let End = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/End'))
  })
};
let No = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/404'))
  })
};
//这种懒加载不能传第三个参数，也就是不能合并
// let No = (resolve) => {
//   return import('@/pages/404')
//   };

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/index'
    },
    {
      path: '/communication',
      name: 'Communication',
      component: Communication
    },
    {
      path: '/personal',
      name: 'Personal',
      meta:{
        login:true,
        ddd:true
      },
      component: Personal
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/end',
      name: 'End',
      component: End
    },
    {
      path: '*',
      name: '404',
      component: No
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(to.meta.login){
    if(router.app.$store.state.checkLogin){
      next()
    }else{
      router.app.$message.error("当前未登录");
    }
  }else{
    next();
  }
});

export default router;
