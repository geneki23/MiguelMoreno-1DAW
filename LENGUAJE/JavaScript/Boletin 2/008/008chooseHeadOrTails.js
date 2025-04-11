"use strict"

let rachaActual = 0;
let rachaMaxima = 0;

while (true) {
    // Pedimos al usuario que ingrese su elección.
    let opcion = prompt("Elige 'cara' (🪙) o 'cruz' (✖️), o escribe 'salir' (🚪) para terminar:");
    
    
    if (opcion === "salir" || opcion === "🚪") {
        alert("¡Gracias por jugar! La máxima racha consecutiva acertada fue: " + rachaMaxima);
        break;
    }
    
    // Verificamos que se haya ingresado una opción válida.
    if (opcion !== "cara" && opcion !== "cruz") {
        alert("Opción inválida. Por favor, ingresa 'cara' o 'cruz'.");
        continue;
    }
    
    // Se genera un resultado aleatorio: 'cara' o 'cruz'.
    const resultado = Math.random() < 0.5 ? "cara" : "cruz";
    alert("Resultado: " + resultado);
    
    // Se comprueba si el jugador acertó y se actualizan las rachas.
    if (opcion === resultado) {
        rachaActual++;
        alert("¡Acertaste! 🎉! Ronda " + rachaActual + " acertada consecutivamente.");
    } else {
        alert("Fallaste 😢. La opción correcta era: " + resultado);
        rachaActual = 0; // Reiniciamos la racha si se falla.
    }
    
    // Actualizamos la racha máxima si es necesario.
    if (rachaActual > rachaMaxima) {
        rachaMaxima = rachaActual;
    }
    
    
}