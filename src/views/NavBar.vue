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
        align-items: left;
        padding: 2em 1.5em;
    }
    a { 
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        text-decoration-line: none;
        color: #FFFFFF;
	    
        transition: 0.5s color ease;
    }
</style>