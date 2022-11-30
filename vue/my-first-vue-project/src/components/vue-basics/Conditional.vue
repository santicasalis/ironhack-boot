<template>
<div>

  <h1 v-if="ej1.isTrue===true">I'm showing up beacuse our reactive data is true!</h1>
  <h1 v-else> I'm the option anytime our reactive data cannot be read as true </h1>

  <div>
    <p v-if="language=='css'">Today we are learing {{language}}</p>
    <p v-else-if="language=='js'">Today we are learing {{language}}</p>
    <p v-else-if="language=='html'">Today we are learing {{language}}</p>
    <p v-else>Today there's no class!</p>
  </div>

  <div v-if="show">
    <h1>{{eje3.name}}</h1>
    <p v-if="eje3.edad>=18">Soy mayor</p>
    <p v-else-if="eje3.edad>0&& eje3.edad<18">Soy menor</p>
    <p v-else>estas muerto</p>

    <h2 v-if="eje3.hasCodedBefore===false">Primera vez</h2>
    <h2 v-else>Ya habia aprendido algo</h2>

  </div>

  <div v-else> nada para mostrar</div>


<div class="ejercicios tarde">
 <h1>My favorites movies</h1>

 <div >
<ul>
    <li v-for="(movie, index) in peliculas" :key="index" >{{movie}}</li>
</ul>
 </div>

 <div v-for="(favorite, index) in favoriteThings" :key="index">
    <ol>
        <li>  {{favorite}}</li>
    </ol>
 


 </div>




</div>

<div>
<ul>
    <li v-for="(student, index ) in students" :key="index">
    <div v-if="student.age<=18">
    <p> i can go for drinks {{student.name}}</p>
    </div>
    <div v-else>
  <p>I can´t go {{student.name}}</p>
    </div>
    <ul>
        <li v-for="language in student.favoriteLanguage" :key="language">
        {{language}}
        </li>
    </ul>
    </li>
</ul>


</div>

</div>
</template>

<script setup>
import {reactive ,ref} from "vue"



const ej1= reactive({
    isTrue:true,
    isFalse:false
})

const language = ref("html")

const eje3 = reactive({
    name: "santiago",
    edad: 29,
    hasCodedBefore:true
})
const show = ref(true)


//ejercicio 1 de la tarde

const peliculas = reactive([
    "Prision break",
    "Games of thrones",
    "Vikings",
    "shooter",
    "Unabomber"
])

const favoriteThings = reactive({
    favoriteSport: "rugby",
    favoriteFood: "milanesa",
    favoriteDrink: "mate",
    favoriteCountry: "brasil",
    favoriteArrayMethod:"for each"
})


const students = reactive([
    {
        name:"santiago",
        age:29,
        favoriteLanguage: "english",
    },
    {
        name:"juan",
        age:18,
        favoriteLanguage:"spanish",
    },
    {
        name:"martin",
        age:24,
        favoriteLanguage:"french",
    },
])
</script>
<style>

</style>


<!-- // CLASS EXCERCISE EXPLANATION
// Ejercicios Conditional Rendering
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos dos <h1> diferentes, uno que diga "I'm showing up beacuse our reactive data is true!" y el otro que diga "I'm the option anytime our reactive data cannot be read as true". Como vemos, los dos dependerán de una variable reactiva en vuestro script y, según si esta es true or false, enseñaréis uno u otro.
// Ede los <p> tags a su vez contendrá el texto "Today we are learing" seguido del valor de la variable que imprimiréis en pantalla usando la moustache syntax. El último <p> tag se encargará de aparecer cuando el valor de "language" no sea ninguno de los tres mencionado anteriormente, y contendrá el texto "Today there's no class!".
// Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript rodeo". -->

