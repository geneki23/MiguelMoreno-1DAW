"use strict"

//Declaro variables
let ingredientes;

//Bucle do while para pedir al usuario la cantidad de ingredientes y validar que no sea mayor a 5
//Alerts correspondientes en cada uno de los casos
do {
    ingredientes = (prompt("Cuantos ingredientes tienes? (numero)"));
    if (ingredientes > 5) {
        alert("La respuesta debe ser entre 1 y 5. Intenta de nuevo.");
    }
} while (ingredientes > 5);
        if (ingredientes == 5) {
            alert("Con esos ingredientes puedes hacer una pizza 🍕");
            alert("Disfruta de tu comida! 🍽️");
        }
        else if (ingredientes == 4) {
            alert("Con esos ingredientes puedes hacer una hamburguesa 🍔\nCon esos ingredientes puedes hacer una ensalada 🥗\nCon esos ingredientes puedes hacer un sandwich 🥪");
            alert("Disfruta de tu comida! 🍽️");
        }
        else if (ingredientes == 3) {
            alert("Con esos ingredientes puedes hacer una hamburguesa 🍔\nCon esos ingredientes puedes hacer un sandwich 🥪");
            alert("Disfruta de tu comida! 🍽️");
        }
        else if (ingredientes == 2) {
            alert("Con esos ingredientes puedes hacer una hamburguesa 🍔");
            alert("Disfruta de tu comida! 🍽️");
        }
        else {
            alert("No tienes suficientes ingredientes para cocinar 😢");
        }
        
   

       
