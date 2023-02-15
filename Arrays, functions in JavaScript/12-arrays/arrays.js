'use strict'

//todo ARRAYS

let nombres = ["Emilio", "Alvaro", "Clara"]

nombres.length

// RECORRER UN ARRAY

document.write("<ul>")
for (let i = 0; i < nombres.length; i++) {
    document.write("<li>" + nombres[i] + "</li>")
}

document.write("</ul>")

nombres.forEach((elemento, index) => {
    document.write("<li>" + index + elemento + "</li>")
})

for(let j in nombres){
    document.write("<li>" + nombres[j] + "</li>")
    
}

// ARRAYS MULTI

let category = ["Acción", "Terror", "Comedias"]
let movies = ["La verdad duele", "La vida es bella", "Gran Torino"]

let cine = [category, movies]

console.log(cine[0][1]) //! El primer nº elige el array y el segundo la posición


// OPERACIONES CON ARRAY
let elemento1; //<-Inicializamos variable
while(elemento1 != "ACABAR"){
    elemento1 = prompt("Introduce tu película."); //<- le damos valor por medio del prompt
    movies.push(elemento1); //<- aquí ya lo guardará
    
}
console.log(movies);

//CONVERTIR ARRAY <=> STRING

let movies_string = movies.join //CONVIERTE UN ARRAY EN STRING SEPARADO POR COMAS
let cadena = "texto1, texto2, texto3"
let cadena_array = cadena.split(",") //CONVIERTE UN STRING EN ARRAY

// ORDENAR UN ARRAY

movies.sort //!ORDENA POR ORDEN ALFABÉTICO
movies.reverse //!ORDENA EL ARRAY AL REVÉS


// BUSQUEDAS

 let busqueda = nombres.find(nombre => nombre == "Emilio")
 let busquedaIndice = nombres.findIndex(nombre => nombre == "Emilio")
 

 let precios = [10,20,50,80,12]

 let busquedaNum = precios.some(precio => precio > 20)