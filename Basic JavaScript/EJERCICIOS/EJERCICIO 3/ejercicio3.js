'use strict'

/*
PROGRAMA QUE MUESTRE TODOS LOS NÚMEROS ENTRE LOS DOS NÚMEROS INTRODUCIDOS POR EL USUARIO

*/

let num1 = parseInt(prompt("Introduce el primer numero", 0))
let num2 = parseInt(prompt("Introduce el primer numero", 0))

if(num1 <= num2){
    for(let i = num1; i <=num2; i++){
        document.write(i + "</br>");
    }
}else if(num1>num2){
    
    for(let i = num1; i >=num2; i--){
        document.write(i + "</br>");
    }
}