<template>
  <div>
  <p>Mi nombre es {{myInfo.name}}, tengo {{myInfo.edad}} años y nací el {{myInfo.nacimiento}}. Mi pelicula favorita es {{movie}} y la vi {{movieCount}} veces. Mi comida favorita es la {{food}}. Mis hobbies son {{myInfo.hobbies[0]}}, {{myInfo.hobbies[1]}}, {{myInfo.hobbies[2]}} </p>
   <div v-html="helloAlert"></div>
</div>
</template>


<script setup>
import{ref ,reactive} from "vue"

let helloAlert = ref(` <a href="" onClick="alert('hola')">Click me </a>`)


const myInfo=reactive({
  name:"Santaigo",
  edad:29,
  nacimiento:"18-10-1993",
  hobbies: ["musica", "futbol", "trekking"]
})

const movie = ref("El ascenso")
const food = ref("Milanesa")
const movieCount=ref(3)
</script>
<style>

</style>