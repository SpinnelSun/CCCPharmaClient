<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>

<script>
import AdminNavBar from '@/views/AdminNavBar'
import ClientNavBar from '@/views/ClientNavBar'

export default {
  name: 'App',
  computed: {
    layout() {
      if(this.$route.meta.is_admin){
        return `admin-nav-bar`;
      }else{
        return `client-nav-bar`;
      }
    }
  },
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
