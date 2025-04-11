"use strict"

//Le hacemos una pregunta al usuario para saber si va a almorzar o cenar y si es vegetariano o no
let comida = prompt("¿Vas a almorzar o cenar? (almuerzo/cena)");

let esVegetariano = prompt("¿Eres vegetariano? (si/no)");

let plato = "";

//Condiciones para almuerzo o cena y si es vegetariano o no

if (comida == "almuerzo" && esVegetariano == "si") {
    plato = "Te recomiendo una ensalada 🥗";
}
else if (comida == "almuerzo" && esVegetariano == "no") {
    plato = "Te recomiendo pollo con arroz 🍚";
}
else if (comida == "cena" && esVegetariano == "si") {
    plato = "Te recomiendo un poco de pasta 🍝";
}
else if (comida =="cena" && esVegetariano =="no") {
    plato = "Te recomiendo hamburguesa con patatas 🍔";
}
else {
    plato ="No entiendo tu respuesta.Asegúrate de responder con las respuestas que te proporcionamos (almuerzo/cena si/no)";
}

alert(plato);