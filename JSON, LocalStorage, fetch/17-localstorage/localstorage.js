'use strict'

//  Local Storage

// GUARDAR DATOS

localStorage.setItem("titulo", "Emilio Molina Román")

// RECUPERAR ELEMENTO

document.querySelector("#prueba").innerHTML = localStorage.getItem("titulo")

// GUARDAR OBJETO

let usuario = {
    nombre: "Emilio",
    email: "paasfkmaf@gmail.com",
    web: "messi.com"
}

localStorage.setItem("usuario", JSON.stringify(usuario))

// RECUPERAR OBJETO
let userjs = JSON.parse(localStorage.getItem("usuario"))

document.querySelector("#prueba").append(" " + userjs.email)

// ELIMINAR ELEMENTOS/OBJETOS LOCAL STORAGE
/*
localStorage.clear()
localStorage.removeItem()
*/