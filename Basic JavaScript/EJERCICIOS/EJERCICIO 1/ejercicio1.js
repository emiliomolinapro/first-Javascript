'use strict'

// PROGRAMA QUE PIDA DOS NÚMEROS Y NOS DIGA CUÁL ES EL MAYOR, EL MENOR Y SI SON IGUALES
// PLUS: SI INTRODUCE NÚMEROS NEGATIVOS O INCORRECTOS QUE LO VUELVA A PEDIR
let num1 = parseInt(prompt("Introduce un número", 0))
let num2 = parseInt(prompt("Introduce un número", 0))

while (num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2)) {
    num1 = parseInt(prompt("Introduce un número", 0))
    num2 = parseInt(prompt("Introduce un número", 0))


}


if (num1 == num2) {
    alert("LOS NÚMEROS SON IGUALES")
} else if (num1 > num2) {
    alert("EL NÚMERO MAYOR ES " + num1)
    alert("EL NÚMERO MENOR ES " + num2)

} else if (num2 > num1) {
    alert("EL NÚMERO MAYOR ES " + num2)
    alert("EL NÚMERO MENOR ES " + num1)

} else {
    alert("INTRODUCE NÚMEROS VALIDOS")
}