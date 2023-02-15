'use strict'

// FUNCIONES
// AGRUPACION REUTILIZABLE DE UN CONJUNTO DE INSTRUCCIONES

function calculadora(num1, num2){
    //Conjunto de instrucciones a ejecutar
    console.log("Suma: " + (num1+num2))
    console.log("Resta: " + (num1+num2))
    console.log("Multiplicacion: " + (num1+num2))
    console.log("Division: " + (num1+num2))
    
    
    return "Hola soy la calculadora"
}


// INVOCAR O LLAMAR A LA FUNCIÓN
let result = calculadora()

console.log(result)


// PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("Fruta 1:", fruta1)
    console.log("Fruta 1:", fruta2)
    console.log(resto_de_frutas)
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melon", "Coco")

let frutas = ["Naranja", "Manzana"]
listadoFrutas(...frutas,"Sandía", "Pera", "Melon", "Coco")

// FUNCIONES ANÓNIMAS
//  SE UTILIZA PARA HACER CALLBACKS, FUNCIÓN DENTRO DE OTRA

// let pelicula = function(nombre){
//     return "La película es: " + nombre 
// }

function sumame (numero1, numero2,sumaYMuestra, sumaPorDos){
    let sumar = numero1 + numero2
    sumaYMuestra(sumar)
    sumaPorDos(sumar)
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es", dato)
},

function(dato){
    console.log("la suma por dos es",(dato*2))
});
 
// FUNCIONES FLECHA
sumame(5, 7, dato =>{
    console.log("La suma es", dato)
},

dato => {
    console.log("la suma por dos es",(dato*2))
});

// FUNCIONES TEXTO

let numero = 444
let texto1 = "Emilio Molina Román"
let texto2 = "Estudiando JavaScript"

let dato = numero.toString()
texto1.toUpperCase //texto1.toLowerCase


    // CALCULAR LONGITUD 
    let nombre1 = "Emilio"
    console.log(nombre1.length)
    
    //CONCATENAR TEXTOS
    let textoTotal = texto1 + " " + texto2
    let textoTotal1 = texto1.concat(texto2)

    // BUSCAR PALABRA EN STRING
    let busqueda = texto1.indexOf("Román")
    // let busqueda = texto1.lastIndexOf("Román") //!para buscar la última vez que aparece
    // let busqueda = texto1.search("Román") //? LO MISMO QUE indexOf
    // let busqueda = texto1.match("Román") //todo Devuelve un array de las palabras y donde se encuentran 
    //  texto1.charAt(E) //! BUSCA LA POSICIÓN DEL CARACTER
    //  texto1.startsWith(E) //! si empieza así la variable devuelve true
    //  texto1.endsWith(E) //! si acaba así la variable devuelve true
    //  texto1.includes(E) //! Busca una palabra en un string y devuelve t/f
    //  texto1.replace("Emilio","Román") 
    //  texto1.slice(10,16) 
    //  texto1.split(" ") //!Separar palabras del string en un Array con todas las palabras separadas
    //  texto.trim() //! Elimina los espacios sobrantes al principio y final
    
    
    
    
    
    console.log(busqueda)













