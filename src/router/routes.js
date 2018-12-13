import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/auth/Signin'
import UserSignup from '@/components/user/UserSignup'
import ProductList from '@/components/product/ProductList'
import ProductUpdate from '@/components/product/ProductUpdate'
import ProductSimpleList from '@/components/product/ProductSimpleList'
import ProductRegister from '@/components/product/ProductRegister'


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
