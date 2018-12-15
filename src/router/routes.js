import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/auth/Signin'
import UserSignup from '@/components/user/UserSignup'
import CategoryList from '@/components/category/CategoryList'
import NotificationList from '@/components/notification/NotificationList'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
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
      path: '/categories',
      name: 'CategoryList',
      component: CategoryList,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },{
      path: '/notifications',
      name: 'Notification',
      component: NotificationList,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('token')) {
      next({ path: '/signin' })
    }else{
      const authorityUser = localStorage.getItem('authority');
      if(to.matched.some(record => record.meta.isAdmin)){
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
