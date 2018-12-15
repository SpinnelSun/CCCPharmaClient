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
<style>
    #layout{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button {
        background-color: #242B3A;
        color: #FFFFFF;
        border: 0;
        padding: 0;
        font-size: 100%;
        font-family: inherit;
        cursor: pointer;
    }
    a {
        color: #FFFFFF;
        -webkit-backface-visibility:hidden;
        backface-visibility:hidden;
        transition:0.5s color ease;
	    text-decoration:none;
    }
</style>
