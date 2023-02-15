'use strict'

/*
    UN NUMERO ES PAR O IMPAR.
    PROMPT
    SI NO ES VALIDO NOS PIDA EL NUMERO
*/

let num = parseInt(prompt("Introduce un numero"))

do{
    num = parseInt(prompt("Introduce un numero válido"))    
}while(isNaN(num))

if(num % 2 == 0){
    console.log("El " + num + " es par")
}else{
    console.log("El " + num + " es impar")
}

