'use strict'
// TABLA DE MULTIPLICAR DE UN NUMERO
let num = parseInt(prompt("Introduce un numero", 0))

for (let i = 0; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>")
}

// TODAS LAS TABLAS

for (let c = 0; c <= 10; c++) {
document.write("<h1> Tabla del " + c + "</h1>")
    for (let i = 0; i <= 10; i++) {
        document.write(i + " x " + c + " = " + (c * i) + "<br>")
    }
}