'use strict'
// MOSTRAR IMPARES QUE HAY ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO

let num1 = parseInt(prompt("Introduce el primer numero", 0))
let num2 = parseInt(prompt("Introduce el segundo numero", 0))

if (num1 > num2) { //10 y 1
    let numAux = 0;
    numAux = num1;  //numAux=10 num1=10
    num1 = num2;    //num1 = 1
    num2 = numAux;  //num2 = 10
}


while (num1 <  num2){
    num1++;
    if(num1%2 !=0){
        console.log(num1)
    }
}