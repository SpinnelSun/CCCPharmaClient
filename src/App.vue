<template>
  <div id="app">
    <nav>
      <component :is="layout">
      </component>
    </nav>
    <main>
      <router-view/>
    </main> 
  </div>
</template>
<script>
import AdminNavBar from '@/views/AdminNavBar'
import ClientNavBar from '@/views/ClientNavBar'
import CommonNavBar from '@/views/CommonNavBar'

export default {
  name: 'App',
  computed: {
    layout() {
      if(this.$route.meta.isAdmin){
        return `admin-nav-bar`;
      }else if(this.$route.meta.isClient){
        return `client-nav-bar`;
      }else{
        return `common-nav-bar`;
      }
    }
  },
  components:{
    AdminNavBar,
    ClientNavBar,
    CommonNavBar
  }
}
</script>

<style>
 @import url("https://fonts.googleapis.com/css?family=Lato");

#app{
  font-family: 'Lato';
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
}
nav {
  grid-column: 1;
  grid-row: 1 / 7;
  font-size: 1.5em;
  background-color: #242B3A;
}
main {
    grid-row: 2 / 7;
    grid-column: 2 / 5; 
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
