<template>
  <nav-bar>
    <router-link to="/products-list">Home</router-link>
    <button @click="quit">Logout</button>
  </nav-bar>
</template>

<script>
import NavBar from '@/views/NavBar';
export default {
  name: 'ClientNavBar',
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