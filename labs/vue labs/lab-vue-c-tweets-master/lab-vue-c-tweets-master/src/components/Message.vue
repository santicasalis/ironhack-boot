<template>
  <p class="message"> {{messageProp.message}}</p>
</template>

<script setup>

const messageProp =defineProps ({
    message : String
})

</script>

<style>

</style>