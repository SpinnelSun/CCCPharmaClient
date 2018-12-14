import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/auth/Signin'
import UserSignup from '@/components/user/UserSignup'
<<<<<<< HEAD
import SaleComponent from '@/components/sale/SaleComponent'
import SaleList from '@/components/sale/SaleList'
=======
import NotificationList from '@/components/notification/NotificationList'
>>>>>>> 5f7285636d1dd3f0bd989ed59651c9105de3dba4

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: UserSignup
    },
    {
<<<<<<< HEAD
      path: '/saleComponent',
      name: 'SaleComponent',
      component: SaleComponent
    },
    {
      path: '/saleList',
      name: 'SaleList',
      component: SaleList
=======
      path: '/notifications',
      name: 'Notification',
      component: NotificationList
>>>>>>> 5f7285636d1dd3f0bd989ed59651c9105de3dba4
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('token')) {
      next({ path: '/signin' })
    }else{
      const authorityUser = localStorage.getItem('authority');
      if(to.matched.some(record => record.meta.is_admin)){
        if(authorityUser == 'ROLE_ADMIN') {
          next()
        } else {
          next({ path: '/baba' })
        }
      }
    }
  } else {
    next()
  }
})

export default router;
