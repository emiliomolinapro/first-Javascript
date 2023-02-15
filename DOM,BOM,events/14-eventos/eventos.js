'use strict'

// EVENTOS
// EVENTOS DEL RATÓN


function cambiarColor() {
    console.log("Me has dasdo click")
    let bg = boton.style.backgroundColor;

    if (bg == "green") {
        boton.style.backgroundColor = "red";

    } else {
        boton.style.backgroundColor = "green"

    }
    return true;
}

let boton = document.querySelector("#boton")

// EVENTO CLICK
boton.addEventListener('click', cambiarColor) 

//MOUSE OVER
boton.addEventListener('mouseover', function () {
    this.style.backgroundColor = "#ccc"
})

// MOUSE OUT
boton.addEventListener('mouseout', function () {
    boton.style.backgroundColor = "lightblue"
})

let input = document.querySelector("#campo_nombre")


// FOCUS

input.addEventListener('focus', function () {
    console.log("[focus] Estás dentro del input")
})

// BLUR

input.addEventListener('blur', function () {
    console.log("[blur] Estás fuera del input")
})

// KEYDOWN

input.addEventListener('keydown', (event) => {
    input = event.key;
    console.log("[keydown] Pulsando la tecla : " + input);
});

// KEYPRESS

input.addEventListener('keypress', (event) => {
    input = event.key;
    console.log("[keypress] Presiono la tecla : " + input);
});

// KEYUP

input.addEventListener('keyup', (event) => {
    input = event.key;
    console.log("[keyup] Tecla soltada : " + input);
});



