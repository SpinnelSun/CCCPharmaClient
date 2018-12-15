<template>
  <nav-bar>
    <router-link to="/products">Home</router-link>
    <router-link to="/signup">Register</router-link>
    <router-link to="/">Login</router-link>
  </nav-bar>
</template>

<script>
import NavBar from '@/views/NavBar'
export default {
  name: 'CommonNavBar',
  components: {
    NavBar
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
