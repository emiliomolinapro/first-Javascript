'use strict'

// UTILIZANDO UN BUCLE, MUESTRA LA SUMA Y LA MEDIA
// DE LOS NºS INTRODUCIDOS  HASTA INTRODUCIR UN Nº
// NEGATIVO Y AHÍ MOSTRAR EL RESULTADO

let suma = 0
let contador = 0

do {
    let numAux = parseInt(prompt("introduce un numero", 0))
    if (isNaN(numAux)) {
        numAux = +0
    } else if (numAux >= 0) {
        suma += numAux;
        contador++;
    }

} while (numAux>=0);

alert("La suma de los números es" + suma)
alert("La media de los números es" + (suma/contador))
