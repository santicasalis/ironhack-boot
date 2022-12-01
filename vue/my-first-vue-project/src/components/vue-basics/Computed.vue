<template>
    <div>
  <div v-for="(movie , index) in myWachtList" :key="index">
 <ul>
    <li>
    <h1>Title: {{movie.title}}   </h1>
    <h2>Year: {{movie.year}}</h2>
     <ul >
        <li v-for="(where , index) in movie.whereToWatch" :key="index">
            {{where}}
        </li>
     </ul>
    </li>
 </ul>

  </div>
  <div>
<h1>list of movies in netflix</h1>
<div v-for="(movie , index) in watchOnNetflix" :key="index">
 <ul>
    <li>
    <h1>Title: {{movie.title}}   </h1>
    <h2>Year: {{movie.year}}</h2>
     <ul >
        <li v-for="(where , index) in movie.whereToWatch" :key="index">
            {{where}}
        </li>
     </ul>
    </li>
 </ul>

  </div>
  </div>
  </div>
</template>

<script setup>
import {reactive, computed} from 'vue'

const myWachtList = reactive([
    {
        title: "Prision break",
        year: 1950,
        whereToWatch: ["Hbo", "netflix"]
    },
    {
        title: "Games of thrones",
        year: 1950,
        whereToWatch: ["Hbo"]
    },
    {
        title: "Vikings",
        year: 1950,
        whereToWatch: ["Netflix", "flow"]
    }
    
])

const watchOnNetflix = computed(() => {
    return myWachtList.filter((movieInNetflix) =>
        movieInNetflix.whereToWatch.includes("Netflix"))
})

</script>

<style>

</style>