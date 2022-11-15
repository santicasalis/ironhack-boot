console.log("Soda Stereo - Un misil en mi placard");
// console.table(["torino", "milan", "roma", "buenos aires", "berlin", "montevideo", "miami", "new york"])


// console.table([
//     "FKJ",
//     "POOLSIDE",
//     "BOOM BOX",
//     "SODA STEREO",
//     "LOS ABUELOS DE LA NADA"
// ])

// let newObject = {
//     firstName: "Santiago",
//     lastName: "Casalis",
//     citiesIlIvedIn: ["Barcelona", "Berlin", "Chalten"],
//     age: 29,
//     dob: "18-10",
//     drinkAlcohol: false
// }


// console.log(`Bebemos alcohol ${newObject.drinkAlcohol}`);
// let arrayObject = [
//     {
//         bookName: "A Song of Ice and Fire",
//         genre: ["fantasía heroica"],
//         author: "George R. R. Martin",
//         year:1455  ,
//         ISBN:"5415511415154836642"
       
//     },
//     {
//         bookName: "The Lord of the Rings",
//         genre: ["fantasía épica"],
//         author: "J. R. R. Tolkien",
//         year:1954  ,
//         ISBN:"145531551444659713315"
       
//     },
//     {
//         bookName: "Developing a Guardiola Approach",
//         genre: ["deporte"],
//         author: "The coach football",
//         year:2015  ,
//         ISBN:"5481451214421545"
       
//    }

// ]
//console.log(`Mi libro favorito es: ${arrayObject[0].bookName}`);
            
var nombre = "Santiago"
var edad = 29
var hobbie = "la Musica"

//console.log(`Hola mi nombre es ${nombre}, tengo ${edad} y me gusta  ${hobbie}`);

var hobbie = "el rugby"
//console.log(`Hola mi nombre es ${nombre}, tengo ${edad} y me gusta  ${hobbie}`)

var hobbie = "comer asado"
//console.log(`Hola mi nombre es ${nombre}, tengo ${edad} y me gusta  ${hobbie}`)

var hobbie = "ir a recitales"
//console.log(`Hola mi nombre es ${nombre}, tengo ${edad} y me gusta  ${hobbie}`)

var hobbie = "ver futbol"
//console.log(`Hola mi nombre es ${nombre}, tengo ${edad} y me gusta  ${hobbie}`)



// let age= parseInt(prompt("Qué edad tienes?"))
// if (age <= 5) {
//     console.log("La entrada es gratis");
// } else if (age > 5 && age < 15) {
//     console.log("Tienes un 20% de descuento");

// } else if (age >= 15 && age <= 60) {
//     console.log("Pagas la entrada regular");
// } else {
//     console.log("tienes un 40% de descuento ");
// }




// const countryOfOrigin = prompt("de que país eres?").toLowerCase()

// switch(countryOfOrigin){
//     case "venezuela":
//     case "colombia":
//     case "ecuador":
//     case "brazil":
//     alert(`${countryOfOrigin} is in South Amercica`);
//     break
//     case "españa":
//     case "italia":
//     case "holanda":
//     case "portugal":
//         alert(`${countryOfOrigin} is in Europe`);
//         break
//     default:
//         alert("No se de donde eres")
// }


// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name,
//un numero age y un objeto livesIn.Ten en cuenta que el objeto livesIn
//será un objeto que contiene dos keys: livesInCity y livesInTown.Las dos
//tendrán un valor booleánico y siempre será una falsa y la otra verdadera.





// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento
//livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

// const ejercicio2 = (name, age, livesIn) => {
//     if (livesIn.livesIncity === true) {
//         return `${name} tiene ${age} años y vive en la ciudad`
//     } else {
//         return `${name} tiene ${age} años y no vive en la ciudad`
//     }
// }


// const ejercicio1 = (name, age, livesIn) => livesIn.livesInCity ?  `${name} tiene ${age} años y vive en la ciudad`:`${name} tiene ${age} años y no vive en la ciudad`



// console.log(ejercicio2("Jarko", 25, { livesInCity: true, livesInTown: false }));

// console.log(ejercicio1("Jarko", 25, { livesInCity: true, livesInTown: false }));


// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
let array=["hola", 5,true]
let arrayLength= array.length

while (arrayLength--) {
    let i=0
    console.log(typeof array[i]);
    i++;
}

// //Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.


let arrayInvertir=[1,2,3,4,5,6,7,8]

const invertir = (arrayInvertir) => {
    arrayInvertir.push(9)
    arrayInvertir.unshift(0)
    

}
