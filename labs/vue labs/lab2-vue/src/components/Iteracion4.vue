<template>
  <div>
    <h1>Iteracion 4 </h1>
<div v-for="(disco, index) in drexler" :key="index">
<h3> {{index}} - disco: {{disco.disco}}</h3>
<hr>
<h2>{{disco.year}}</h2> <span>Mejor cancion: {{disco.bestSong}} </span>
</div>


  </div>
</template>



<script setup>
import { reactive } from "vue"

const drexler = reactive([
    {
        disco: "Amar la trama",
        year: 2010,
        bestSong:"Las transeuntes"
    
    },
    {
        disco: "Tinta y tiempo",
        year: 2022,
        bestSong:"Cinturon blanco"
    
    },
    {
        disco: "Bailar en la cueva",
        year: 2014,
        bestSong:"La luna de rasqui"
    
    },
    {
        disco: "Salvavidas de hielo",
        year: 2017,
        bestSong:"Telefonia"
    
    },


])

</script>





<style>

</style>