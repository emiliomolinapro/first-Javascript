'use strict'

// BOM - BROWSER OBJECT MODEL

function getBom() {
    console.log(screen.width)
    console.log(screen.height)
    console.log(window.location)

}

function redirect(url) {
    window.location.href = url
}

function openWindow(url) {
    window.open(url, "", "width-400,height-300");
}





getBom();
