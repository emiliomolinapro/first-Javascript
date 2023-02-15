'use strict'

// FETCH Y PETICIONES A SERVICIIOS / APIS REST

let usuarios = []
let divUsuarios = document.querySelector("#div-usuarios")
fetch("https://reqres.in/api/users ")
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios)
 
        usuarios.map((user, i) => {
            let nombre = document.createElement("h2")
            nombre.innerHTML = i + user.first_name + " ." + user.last_name
            divUsuarios.appendChild(nombre)
        })
    })