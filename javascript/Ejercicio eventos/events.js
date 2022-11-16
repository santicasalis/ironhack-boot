
const boton = document.querySelector(".agregoP")
let newElement = document.createElement("p")
const addP=()=>boton.appendChild(newElement)

boton.addEventListener("click", addP)


//Crea un elemento de color verde y un botón para togglear el color de verde a rojo.

const primerDiv = document.querySelector("#primerDiv")


const toggleFunction = () => primerDiv.classList.toggle("removeClass")
primerDiv.addEventListener("mouseover", toggleFunction)