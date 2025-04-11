"use strict"

// Solicitar al usuario que ingrese la lista de monos y bananas
let entrada = prompt("Ingrese una lista de 🐵 (monos) y 🍌 (bananas):");

// Contar cuántos monos y bananas hay en la entrada
let cantidadMonos = 0;
let cantidadBananas = 0;

for (let i = 0; i < entrada.length; i++) {
    if (entrada[i] === "🐵") {
        cantidadMonos++;
    } else if (entrada[i] === "🍌") {
        cantidadBananas++;
    }
}

// Preguntar cuántas bananas come cada mono
let bananasPorMono = [];
for (let i = 0; i < cantidadMonos; i++) {
    let bananas = parseInt(prompt(`¿Cuántas bananas come el mono ${i + 1}?`));
    bananasPorMono.push(bananas);
}

// Calcular el total de bananas necesarias
let bananasNecesarias = 0;
for (let i = 0; i < bananasPorMono.length; i++) {
    bananasNecesarias += bananasPorMono[i];
}

// Verificar si hay suficientes bananas
if (bananasNecesarias <= cantidadBananas) {
    alert("¡Genial! Hay suficientes bananas para todos los monos. 🎉");
} else {
    alert("¡Oh no! ¡No hay suficientes bananas para los monos! 😭");
}
