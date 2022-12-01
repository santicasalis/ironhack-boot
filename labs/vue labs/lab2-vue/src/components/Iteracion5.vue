<template>
  <div>
<h1>iteracion 5</h1>

<div class="iteracion-5" :class="condicion? 'rojo' : 'verde'">

<h2>cambio de background-color</h2>

<button @click="cambiarColor()"> Click cambiar color</button>
</div>

  </div>
</template>



<script setup>

import{ref} from "vue"

const condicion=ref(true)


const cambiarColor = () => {
    condicion.value = !condicion.value
}
</script>




<style>
.rojo{
    background: red;

}

.verde{
    background: green;
    border: yellow 3px solid;
}
</style>