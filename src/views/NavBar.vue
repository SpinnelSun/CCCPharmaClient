<template>
    <div id="layout">
        <slot></slot>
    </div>
</template>
<script>
import { logout } from '@/services/authService'
export default {
  name: 'NavBar'
}
</script>
<style scoped>
    #layout{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    a {
        color: #FFFFFF;
        -webkit-backface-visibility:hidden;
        backface-visibility:hidden;
        transition:0.5s color ease;
	    text-decoration:none;
    }
</style>
