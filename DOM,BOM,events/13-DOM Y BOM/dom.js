'use strict'

// DOM - DOCUMENT OBJECT MODEL

function cambiaColor(color){
    box.style.background = color
}


let box = document.getElementById("myBox");
// let box = document.querySelector("myBox")





box.innerHTML = "TEXTO DESDE JS"
box.style.background = "red"
box.style.padding = "20px"
box.style.color = "white"
box.className = "hola hola2"

// CONSEGUIR ELEMENTO POR SU ETIQUETA
let todosLosDivs = document.getElementsByTagName('div')

let contenidoEnTexto = todosLosDivs[2]

todosLosDivs.forEach((element,indice) => {
    
});

// CONSEGUIR ELEMENTO POR SU CLASE CSS

let divsRojos = document.getElementsByClassName('rojo') // Guarda todos los elemetnos con la clase rojo en un array

    //! SE GUARDAN EN UN ARRAY

// CREAR LISTA CON TODOS LOS TIPOS DE UN ELEMENTO

let match = document.querySelectorAll('div') 
