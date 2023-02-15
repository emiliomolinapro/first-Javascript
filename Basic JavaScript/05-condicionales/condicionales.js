'use strict'

// CONDICIONAL IF
var age1= 23
var myName = "Emilio Molina Román"

if(age1>18){
    console.log(myname + "is of legal age")
    if(age1<=33){
        console.log("Millenial")
    }else if(age1 > 70){
        console.log("Elder")
    }else{
        console.log("Not millenial")
    }
}
else{
    console.log(myName + "is underage")
}

//  LOGICAL OPERATORS
//  AND: &&    OR: ||  NEGATION: !

var year = 2022;

// NEGATION
if(year != 2023){
    console.log("This is not the current year")
}

// AND
if(year >=2000 && year<=2023){
    console.log("Current era")
}else{
    console.log("Post modern era")
}

