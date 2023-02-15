'use strict'

let formulario = document.querySelector("#formulario")

let box_dashed = document.querySelector(".dashed");
box_dashed.style.display = "none"

formulario.addEventListener('submit', function () {
    console.log("Evento submit capturado")
    let nombre = document.querySelector('input[name="nombre"]').value
    let apellido = document.querySelector('input[name="apellidos"]').value
    let edad = parseInt(document.querySelector('input[name="edad"]').value)

    if (nombre.trim() == null || nombre.trim().length() == 0) {
        alert("El nombre no es válido")
        return false
    }
    if (apellido.trim() == null || apellido.trim().length() == 0) {
        alert("Los apellidos no son válidos")
        return false
    }
    if (edad <= 0 || isNaN(edad)) {
        alert("La edad no es válido")
        return false
    }

    let datos_usuario = [nombre, apellido, edad]
    let indice;
    for (indice in datos_usuario) {
        let parrafo = document.createElement("p")
        parrafo.append(datos_usuario[indice])
        box_dashed.append(parrafo)
    }

})
