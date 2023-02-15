'use strict'

// MUESTRA TODOLOS DIVISORES DE UN NÚMERO INTROUCIDO EN PROMPT

let num1 = parseInt(prompt("Introduce el numero", 1))

for (let i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
        console.log("El " + i + " es divisor de" + num1)
    }
}