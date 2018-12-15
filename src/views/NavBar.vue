<template>
  <div id="nav-bar">
    <slot></slot>
    <router-link to="/logout">Logout</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
#nav-bar{
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #242B3A; 
}

</style>
