<template>
 <div v-html="helloAlert">   </div> 



</template>


<script setup>
import { ref } from "vue"



let helloAlert = ref(` <a href="" onClick="alert('hola')">Click me </a>`)



</script>
<style>

button{
    padding: 5rem 5rem;
    background: red;
}
</style>