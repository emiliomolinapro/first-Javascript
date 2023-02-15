'use strict'

// TIMERS

// setTimeInterval EJECUTAR UN TROZO DE CÓDIGO CADA X SEGUNDOS
function intervalo() {
    let tiempo = setInterval(function () {
        console.log("setInterval ejecutado")
        let encabezado = document.querySelector("h1")
        if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "30px"
        } else {
            encabezado.style.fontSize = "50px"
        }
    }, 500)
    return tiempo
}


let tiempo = intervalo()



let stop = document.querySelector("#stop");

stop.addEventListener("click", function () {
    alert("Has parado el intervalo en bucle");
    clearInterval(tiempo)
});

let start = document.querySelector("#start")

start.addEventListener("click", function () {
    alert("Has iniciado el bucle")
    intervalo()
})


// setTimeOut ejecuta un trozo de código UNA VEZ

let tiempo2 = setTimeout(function () {

    console.log("setTimeOut ejecutado")
    let encabezado = document.querySelector("h2")
    if (encabezado.style.fontSize == "40px") {
        encabezado.style.fontSize = "30px"
    } else {
        encabezado.style.fontSize = "40px"
    }
}, 5000)