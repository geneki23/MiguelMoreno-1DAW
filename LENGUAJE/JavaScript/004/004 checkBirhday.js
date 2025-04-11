"use strict"
//Declaro variables

let diaCorrecto = 23;
let mesCorrecto = 10;

let vidas = 10;
let win = false;
//Inicio del juego
while (vidas > 0 && !win) {
    let dia = parseInt(prompt("¿Que día nací? (numero)"));

    let mes = parseInt(prompt("¿En que mes nací? (numero)"));

//Alerts para mostrar si ha acertado o no
    if (dia == diaCorrecto && mes == mesCorrecto) {
        win = true;
        alert("¡Felicidades! Has acertado mi cumpleaños 🎉");
        alert("El juego ha terminado. Gracias por jugar! 🎮");
    }
    else {

        vidas--; //Contador de vidas
        
    }
    //Alert para mostrar el número de vidas restantes
    if (!win && vidas > 0) {
        let continuar = confirm("¿Quieres seguir jugando? Te quedan " + vidas + " vidas 💚");
        if (!continuar) {
         
            alert("Has decidido salir del juego. Gracias por jugar! 🎮");
            break; //Este break es por si el usuario decide salir del juego
        }
    }
    //Alert paara mostrar si ha perdido
    else if (vidas == 0) {
        alert("Lo siento, has perdido. Te quedan 0 vidas 💔. Fin del juego.");
        alert("Gracias por jugar! 🎮");
    }

}


