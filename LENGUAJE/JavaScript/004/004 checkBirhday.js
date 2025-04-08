"use strict"

const diaCorrecto = 23;
const mesCorrecto = 10;

let vidas = 10;
let gana = false;

while (vidas > 0 && !gana) {
    let dia = parseInt(prompt("¿Que día nací? (numero)"));

    let mes = parseInt(prompt("¿En que mes nací? (numero)"));


    if (dia == diaCorrecto && mes == mesCorrecto) {
        gana = true;
        break;
    }
    else {
        vidas--;
        
    }



}