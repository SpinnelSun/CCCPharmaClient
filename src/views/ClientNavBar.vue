<template>
  <nav-bar>
    <router-link to="/products-list">Home</router-link>
  </nav-bar>
</template>

<script>
import NavBar from '@/views/NavBar';
export default {
  name: 'ClientNavBar',
  components: {
    NavBar
  }
}
</script>