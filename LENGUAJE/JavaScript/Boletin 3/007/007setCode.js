"use strict"

// Crear un Set vacío llamado code
let code = new Set();

// Añadir al Set los siguientes elementos
code.add("JavaScript");
code.add("Python");
code.add("Java");
code.add("JavaScript"); // Duplicado, no se añadira
code.add("C++");

// Mostrar el contenido inicial del Set
console.log("Contenido inicial del Set:", code); 

// Comprobar si existen los elementos "Java" y "Ruby"
console.log("¿El Set contiene 'Java'?", code.has("Java")); 
console.log("¿El Set contiene 'Ruby'?", code.has("Ruby")); 

// Eliminar el elemento "C++"
code.delete("C++");
console.log("Contenido del Set después de eliminar 'C++':", code);

// Iterar sobre los elementos del Set con forEach
console.log("Elementos del Set:");
code.forEach(element => console.log(element));

// Mostrar el número total de elementos actuales en el Set
console.log("Número total de elementos en el Set:", code.size);

// Eliminar todos los elementos del Set
code.clear();
console.log("Contenido del Set después de clear():", code);
console.log("Tamaño del Set después de clear():", code.size);