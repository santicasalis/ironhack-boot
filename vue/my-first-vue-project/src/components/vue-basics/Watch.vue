<template> 
<div>
<label for="answer"> Te gusta la pizza</label>
<input type="text" v-model="answer" />

<div v-html="answerJson"> 
</div>




</div>
</template>

<script setup>
import {ref, watch} from 'vue'

const answerJson = ref("");
const answer = ref();

watch(answer, async (newanswer, oldanswer) => {
    const response = await fetch("./respuesta.json")
   console.log(response);
    if (newanswer.value == "si") {
        answerJson.value = `
        <h3>${response[0].answer}</h3 >)
            <img src="${response[0].image}" alt="">
        `;

        
    // try {
    //   ;
    //   answerJson.value = (await response.json()).answerJson;
    // } catch (error) {
    //   answerJson.value = `Hey, no me pude comunicar con la API, este error equivale a ${error}`;
    // }
  }
});


</script>





<style>

</style>