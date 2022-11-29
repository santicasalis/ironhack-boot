<template>
  <h1 v-text="title">    </h1>

</template>



<script setup>
import{ref}from "vue"
const title=ref("Primer proyecto Vue")

</script>

<style>
 h1{
  color: beige;
 }
</style>