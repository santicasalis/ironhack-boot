
<script setup>

import   Hola from "./components/Hola.vue";


</script>

<template>
<div>
  <header>
    <Hola/>
   </header>

  <main class="wrapper">
    
  </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  

   .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
