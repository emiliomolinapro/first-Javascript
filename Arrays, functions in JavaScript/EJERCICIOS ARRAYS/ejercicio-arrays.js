'use strict'

/* 
1. PIDA 6 NUMEROS POR PANTALLA Y LOS META EN UN ARRAY
2. MOSTRAR EL ARRAY ENTERO (TODOS LOS ELEMENTOS) EN EL CUERPO DE LA PÁGINA Y CONSOLA
3. ORDENARLO Y MOSTRARLO 
4. INVERTIR SU ORDEN Y MOSTRARLO
5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY
6. BUSQUEDA DE UN VALOR INTRODUCIDO POR EL USUARIO, QUE NOS DIGA SI LO ENCUENTRA Y SU ÍNIDICE


*/
let cadena = [];
1
function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del Array " + textoCustom + "</h1>")
    document.write("<ul>")

    cadena.forEach((numero, index) => {
        document.write("<li>" + numero + "</li>")

    });

    document.write("</ul>")
}



for (let i = 0; i <= 5; i++) {
    cadena.push(parseInt(prompt("Introduce un número para el array", 0)));
}

console.log(cadena)
mostrarArray(cadena)

cadena.reverse
mostrarArray(cadena, "Invertida")
  

document.write("El array tiene " + cadena.length + " elementos")

