"use strict"

let comida = prompt("¿Vas a almorzar o cenar? (almuerzo/cena)").toLowerCase();

let esVegetariano = prompt("¿Eres vegetariano? (si/no)").toLowerCase();

let plato = "";

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