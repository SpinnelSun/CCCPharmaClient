<template>
  <nav-bar>
    <router-link to="/products">Home</router-link>
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
