<template>
  <div id="app">
    <admin-nav-bar></admin-nav-bar>
    <br><br><br><br>
    <client-nav-bar></client-nav-bar>
  </div>
</template>

<script>
import AdminNavBar from '@/views/AdminNavBar'
import ClientNavBar from '@/views/ClientNavBar'
export default {
  name: 'App',
  components:{
    AdminNavBar,
    ClientNavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
}

.error {
  color: #D8000C;
  background-color: #FFBABA;
}

.sucess {
  color: #270;
  background-color: #DFF2BF;
}
</style>
