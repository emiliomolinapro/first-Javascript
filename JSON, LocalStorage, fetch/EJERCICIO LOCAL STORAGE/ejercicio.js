
let formulario = document.querySelector("#formPeliculas")



formulario.addEventListener('submit', function () {
    console.log("entra")
    let titulo = document.querySelector("#addPelicula").value
    if (titulo.length >= 1) {

        localStorage.setItem(titulo, titulo)
    }
})

let i;
let ul = document.querySelector("#peliculas-list")

for(let i in localStorage){

    if(typeof localStorage[i] == 'string'){
        let li = document.createElement("li")
        li.append(localStorage[i])
        ul.append(li)
    }
}
