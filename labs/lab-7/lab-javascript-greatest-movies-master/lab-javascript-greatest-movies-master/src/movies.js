

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const rawList = moviesArray.map((movie) => movie.director);
    const cleanListe= rawList.filter((director,numero)=>rawList.indexOf(director)===numero)

    return cleanListe
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
let contador=0
    moviesArray.forEach(element => {
        if (element.director == "Steven Spielberg" && element.genre.includes("Drama")) {
            contador= contador +1
        }
        
    });
   // console.log(contador);
   return(contador); 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0
    let sum=0
    for (let i = 0; i < moviesArray.length; i++){
    sum += (moviesArray[i].score)
    }
    let average = sum / moviesArray.length
    Number(average.toFixed(2))
    
    return(average);
    
}


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
// {
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//   }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray=[]
   newArray=moviesArray.sort((a, b) => a.year - b.year); 
    return newArray
    //ME FALTA ORDENAR POR TITULO SI COINCIDE EL AÑO 
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(moviesArray) {
    let newArray = [ ...moviesArray.slice(0, 20).title ]
 console.log("hola");
    // newArray = newArray.sort((a, b) => (a > b ? 1 : -1))
   
    // for (let i = 0; i < moviesArray.length; i++){
    //     newArray[i] = moviesArray[i];
    // }

    return newArray
}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
