"use strict"

let thor = "Thor es el hijo de Odín";

// 1. Largo de la cadena
console.log("Longitud de la cadena:", thor.length);

// 2. Encontrar la letra o (busca la primera aparición de "o")
console.log("Primera aparición de 'o':", thor.indexOf("o"));

// 3. Encontrar el carácter que ocupa la posición 3
console.log("Carácter en la posición 3:", thor.charAt(3));

// 4. ¿Qué carácter ocupa la posición 1?
console.log("Carácter en la posición 1:", thor.charAt(1));

// 5. Trocea la cadena usando los espacios en blanco
let palabras = thor.split(" ");
console.log("Cadena troceada:", palabras);

// 6. Reemplaza Thor por Loki
let nuevaCadena = thor.replace("Thor", "Loki");
console.log("Reemplazando 'Thor' por 'Loki':", nuevaCadena);

// 7. Recorta la cadena para que devuelva la palabra Odín
let palabraOdin = thor.slice(19);
console.log("Palabra recortada (Odín):", palabraOdin);

// 8. ¿Puedes encontrar la letra a? Demuéstralo
let posicionA = thor.indexOf("a");
if (posicionA !== -1) {
  console.log("Se encontró la letra 'a' en la posición:", posicionA);
} else {
  console.log("La letra 'a' no se encontró en la cadena");
}

// 9. Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)
let mitadMinuscula = thor.slice(12).toLowerCase();
console.log("Mitad de la cadena en minúsculas:", mitadMinuscula);