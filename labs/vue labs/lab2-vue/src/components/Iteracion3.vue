<template>
<div>

  <h1>Iteracion 3</h1>

 <h3 v-if="condicion">La condicion es true</h3>
 <h3 v-else>La condicion es false</h3>


</div>
</template>



<script setup>
import{ref} from "vue"


const condicion=ref(true)


</script>




<style>

</style>