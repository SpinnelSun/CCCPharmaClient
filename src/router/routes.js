import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/auth/Signin'
import UserSignup from '@/components/user/UserSignup'
import ProductList from '@/components/product/ProductList'
import ProductUpdate from '@/components/product/adminActions/ProductUpdate'
import ProductSimpleList from '@/components/product/clientLists/ProductSimpleList'
import ProductUnavailableList from '@/components/product/clientLists/ProductUnavailableList'
import ProductRegister from '@/components/product/adminActions/ProductRegister'
import CategoryList from '@/components/category/CategoryList'
import NotificationList from '@/components/notification/NotificationList'

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
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/products/:code',
      name: ProductUpdate,
      component: ProductUpdate
    },
    {
      path: '/products-simple',
      name: ProductSimpleList,
      component: ProductSimpleList
    },
    {
      path: '/products-register',
      name: ProductRegister,
      component: ProductRegister
    },{
      path: '/categories',
      name: 'CategoryList',
      component: CategoryList
    },{
      path: '/notifications',
      name: 'Notification',
      component: NotificationList
    },{
      path:'/products-unavailable',
      name: ProductUnavailableList,
      component: ProductUnavailableList
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
