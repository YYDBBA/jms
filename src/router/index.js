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
let Personals = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Personals'))
  })
};
let Headpic = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Headpic'))
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
let Picture = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Picture'))
  })
};
let About = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/About'))
  })
};
let Bighead = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/pages/Bighead'))
  })
};
//这种懒加载不能传第三个参数，也就是不能合并
// let No = (resolve) => {
//   return import('@/pages/404')
//   };

const router = new Router({
  mode: 'history',
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
      path: '/personals/:name',
      name: 'Personals',
      component: Personals
    },
    {
      path: '/headpic',
      name: 'Headpic',
      component: Headpic
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/end',
      name: 'End',
      component: End,
      meta:{
        login:true
      }
    },
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/bighead',
      name: 'Bighead',
      component: Bighead
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
    let a = localStorage.getItem('checkLogin');
    if(a === 'true'){
      next()
    }else{
      router.app.$message.error("当前未登录");
    }
  }else{
    next();
  }
});

export default router;
