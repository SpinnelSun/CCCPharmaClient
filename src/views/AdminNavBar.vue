<template>
  <nav-bar>
    <router-link to="/notifications">Home</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/categories">Categories</router-link>
    <router-link to="/sales">Sales</router-link>
    <button @click="quit">Logout</button>
  </nav-bar>
</template>

<script>
import NavBar from '@/views/NavBar'
import { logout } from '@/services/authService'
export default {
  name: 'AdminNavBar',
  components: {
    NavBar
  },
  methods: {
    quit(){
        logout();
        this.$router.push('signin');
    }
  }
}
</script>
<style>
    button {
      background-color: #242B3A;
      color: #FFFFFF;
      border: 0;
      padding: 0;
      font-size: 100%;
      font-family: inherit;
      cursor: pointer;
    }
</style>