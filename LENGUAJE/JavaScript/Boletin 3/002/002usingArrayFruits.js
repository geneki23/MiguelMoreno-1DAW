"use strict"

let fruits = ["Banana", "Manzana", "Fresa"];

// Añadimos cereza al principio
fruits.unshift("Cereza");
console.log("Después de añadir 'Cereza' al principio:", fruits);

// Añadimos melocotón al final
fruits.push("Melocotón");
console.log("Después de añadir 'Melocotón' al final:", fruits);

// Mostrar el array elemento a elemento con forEach
console.log("Mostrando elementos con forEach:");
fruits.forEach(fruit => console.log(fruit));

// Eliminamos el primer elemento.
let removedFirst = fruits.shift();
console.log("Elemento eliminado (primero):", removedFirst);
console.log("Array después de eliminar el primer elemento:", fruits);

// Eliminamos el último elemento.
let removedLast = fruits.pop();
console.log("Elemento eliminado (último):", removedLast);
console.log("Array después de eliminar el último elemento:", fruits);

// Mostrar cada elemento con for of
console.log("Mostrando elementos con for...of:");
for (let fruit of fruits) {
  console.log(fruit);
}