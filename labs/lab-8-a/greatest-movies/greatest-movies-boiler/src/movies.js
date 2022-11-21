// import { movies } from "./data.js";


// COMANDO DE NODE PARA VER RESULTADOS:
// node movies.js

//Iteracion 1
// funcion tipo flecha que aceptara un parametro
// porque el param va a ser el array de datos que queremos apuntar.
const getAllDirectors = (moviesArray) => {
  // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
  const rawList = moviesArray.map((movie) => movie.director);
  // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
  const cleanList = rawList.filter(
    (director, index) => rawList.indexOf(director) === index
  );
  // returnamos la variable que queremos usar :)
  return cleanList;
};
console.log("1. Clean list:");
console.table(getAllDirectors(movies));

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let contador=0
      moviesArray.forEach(element => {
          if (element.director == "Steven Spielberg" && element.genre.includes("Drama")) {
              contador= contador +1
          }
          
      });
     
     return(contador); 
}
  
// iteration 2 con filter
// const howManyMovies2=(moviesArray) => {
//   const dramaMovies = moviesArray.filter((movie) =>
//     movie.director === "steven Spielberg" && movie.genre.includes("Drama"))
//   return dramaMovies
// }
  
  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(moviesArray) {
      if (moviesArray.length === 0) return 0
      let sum=0
      for (let i = 0; i < moviesArray.length; i++){
      sum += (moviesArray[i].score)
      }
      let average = sum / moviesArray.length
      average=Number(average.toFixed(2))
      
      return(average);
      
}
  // Iteration 3 con map
// const scoresAverage2 = (moviesArray) => {
//   let totalScores = 0
//   const scores = moviesArray.map((movie) => movie.score)
  
//   for (let i = 0; i < scores.length; i++){
//     totalScores=scores[i]+totalScores
//   }
//   const totalMovilScore = totalScores / moviesArray.length
//   return totalMovilScore.toFixed(2)
//   }
  

// // Iteration 3 con Reduce
// const scoresAverage3 = (moviesArray) => { 
//   const scores = moviesArray.reduce((total, movie) => {
//     return total+=movie.score
//   }, 0)
//   const totalMovilScore = scores / moviesArray.length
//   return totalMovilScore.toFixed(2)
// }
 

           
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArray) {
      let sum=0
      let dramaFilter = moviesArray.filter((movie) => movie.genre.includes("Drama"))
      if(dramaFilter.length===0)return 0
      for (let i = 0; i < dramaFilter.length; i++){
          sum += (dramaFilter[i].score)
      }
      let average = sum / dramaFilter.length
      
      
      return average; 
            
  }         
 
// opcion usar el map por el for



  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesArray) {
      let newArray=[...moviesArray]
    newArray = moviesArray.sort((a, b) => {
      if (a.year < b.year) return a.year - b.year
      if (a.year > b.year) return a.year - b.year
      
     }) 
      return newArray
      //ME FALTA ORDENAR POR TITULO SI COINCIDE EL AÑO 
  }
  
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  
  
  function orderAlphabetically(moviesArray) {
      let newArray = [ ...moviesArray ]
  
      // newArray = newArray.sort((a, b) => (a > b ? 1 : -1))
     
      // for (let i = 0; i < moviesArray.length; i++){
      //     newArray[i] = moviesArray[i];
      // }

    return newArray.map((movie)=>movie.title).sort().slice(0,20)
}

  
  
  
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes(moviesArray) {
      
  }
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {}