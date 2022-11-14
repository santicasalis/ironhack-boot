console.log("Soda Stereo - Un misil en mi placard");
// console.table(["torino", "milan", "roma", "buenos aires", "berlin", "montevideo", "miami", "new york"])


// console.table([
//     "FKJ",
//     "POOLSIDE",
//     "BOOM BOX",
//     "SODA STEREO",
//     "LOS ABUELOS DE LA NADA"
// ])

let newObject = {
    firstName: "Santiago",
    lastName: "Casalis",
    citiesIlIvedIn: ["Barcelona", "Berlin", "Chalten"],
    age: 29,
    dob: "18-10",
    drinkAlcohol: false
}


console.log(`Bebemos alcohol ${newObject.drinkAlcohol}`);
let arrayObject = [
    {
        bookName: "A Song of Ice and Fire",
        genre: ["fantasía heroica"],
        author: "George R. R. Martin",
        year:1455  ,
        ISBN:"5415511415154836642"
       
    },
    {
        bookName: "The Lord of the Rings",
        genre: ["fantasía épica"],
        author: "J. R. R. Tolkien",
        year:1954  ,
        ISBN:"145531551444659713315"
       
    },
    {
        bookName: "Developing a Guardiola Approach",
        genre: ["deporte"],
        author: "The coach football",
        year:2015  ,
        ISBN:"5481451214421545"
       
   }

]
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



let age= parseInt(prompt("Qué edad tienes?"))


if (age <= 5) {
    console.log("La entrada es gratis");
} else if (age > 5 && age < 15) {
    console.log("Tienes un 20% de descuento");

} else if (age >= 15 && age <= 60) {
    console.log("Pagas la entrada regular");
} else {
    console.log("tienes un 40% de descuento ");
}