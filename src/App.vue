<template>
  <div id="app">
    <router-link to="/signin">Login</router-link>
    <router-link to="/signup">Signup</router-link>
    <router-link to="/categories">Categories</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
