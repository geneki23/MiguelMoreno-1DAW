"use strict"
//Declaro la variable numeros y la inicializo en 0
let numeros = 0;
//Bucle for que va del 1 al 100
//Después se comprueba si el numero es divisible entre 3, 5 o ambos
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("meloso 🧸");
    } else if (i % 3 === 0) {
        console.log("miel 🍯");
    } else if (i % 5 === 0) {
        console.log("oso 🐻");
    } else {
        console.log(i);
    }
}