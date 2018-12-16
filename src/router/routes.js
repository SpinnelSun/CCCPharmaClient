import Vue from 'vue'
import Router from 'vue-router'

import Signin from '@/components/auth/Signin'
import UserSignup from '@/components/user/UserSignup'

import SaleList from '@/components/sale/SaleList'
import SaleRegister from '@/components/sale/SaleRegister'
import SaleComponent from '@/components/sale/SaleComponent'

import CategoryList from '@/components/category/CategoryList'

import NotificationList from '@/components/notification/NotificationList'

import ProductList from '@/components/product/client/ProductList'
import ProductUpdate from '@/components/product/admin/ProductUpdate'
import ProductRegister from '@/components/product/admin/ProductRegister'
import ProductDetailedList from '@/components/product/admin/ProductDetailedList'
import ProductUnavailableList from '@/components/product/client/ProductUnavailableList'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: UserSignup
    },
    {
      path: '/sales',
      name: 'SaleList',
      component: SaleList,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/sales/:code',
      name: 'SaleComponent',
      component: SaleComponent,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/sale-register',
      name: 'SaleRegister',
      component: SaleRegister,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/products',
      name: 'ProductDetailedList',
      component: ProductDetailedList,
      meta: {
        requiresAuth: true,
        isAdmin: true,
      }
    },
    {
      path: '/products/:code',
      name: 'ProductUpdate',
      component: ProductUpdate,
      meta: {
        requiresAuth: true,
        isAdmin: true,
      }
    },
    {
      path: '/products-client',
      name: 'ProductList',
      component: ProductList,
      meta: {
        isClient: true
      }
    },
    {
      path: '/products-register',
      name: 'ProductRegister',
      component: ProductRegister,
      meta: {
        requiresAuth: true,
        isAdmin: true,
      }
    },
    {
      path: '/categories',
      name: 'CategoryList',
      component: CategoryList,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path: '/notifications',
      name: 'Notification',
      component: NotificationList,
      meta: {
        requiresAuth: true,
        isAdmin: true
      }
    },
    {
      path:'/products-unavailable',
      name: ProductUnavailableList,
      component: ProductUnavailableList,
      meta: {
        requiresAuth: true,
        isAdmin: true,
        isClient: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(!to.matched.some(record => record)){
    next(false);
  }else{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('token')) {
      next({ path: '/' })
    }else{
      const authorityUser = localStorage.getItem('authority');
      if(to.matched.some(record => record.meta.isAdmin)){
        if(authorityUser === 'ROLE_ADMIN') {
          next()
        } else if(authorityUser == 'ROLE_CLIENT'){
          next(false);
        } else {
          next({ path: '/error' })
        }
      }
    }
  } else {
    next()
  }
}
})

export default router;