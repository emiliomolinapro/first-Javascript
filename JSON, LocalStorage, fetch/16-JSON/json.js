'use strict'

//  JSON - JAVASCRIPT OBJECT NOTATION

let pelicula = {
    title: "Spiderman No Way Home",
    year: 2022,
    country: "United States"
}

console.log(pelicula.country)

// ! Se puede cambiar el dato desde fuera del objeto
pelicula.country = "Spain"
console.log(pelicula.country)

let peliculas = [
    { title: "Spiderman HomeComing", year: 2017, country: "USA"},
    pelicula
]

let caja_peliculas = document.querySelector("#peliculas")

let index;

for(index in peliculas){
    let p = document.createElement("p")
    p.append(peliculas[index].title + " " + pelicula[index].year )
    caja_peliculas.append(p)
}

