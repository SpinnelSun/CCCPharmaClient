<template>
  <div id="nav-bar">
    <router-link to="/notifications">Home</router-link>
    <router-link to="/categories">Categories</router-link>
    <!-- ADICIONAR PRODUCTS E SALES-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'AdminNavBar'
}
</script>

<style scoped>
#nav-bar{
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   background-color: #242B3A; 
}

</style>
