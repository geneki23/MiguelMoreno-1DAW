"use  strict"

// 1. Declara un array vacío.
let arrayVacio = [];

// 2. Declara un array con más de 5 elementos.
let arrayNumeros = [10, 20, 30, 40, 50, 60];

// 3. Encuentra la longitud de tu array.
console.log("Longitud de arrayNumeros:", arrayNumeros.length); // Salida: 6

// 4. Obtén el primer elemento, el elemento del medio y el último elemento de un array.
let primerElemento = arrayNumeros[0];
let elementoDelMedio = arrayNumeros[Math.floor(arrayNumeros.length / 2)];
let ultimoElemento = arrayNumeros[arrayNumeros.length - 1];

console.log("Primer elemento:", primerElemento);       // Salida: 10
console.log("Elemento del medio:", elementoDelMedio);   // Salida: 40
console.log("Último elemento:", ultimoElemento);        // Salida: 60

// 5. Declara un array llamado mixedDataTypes, coloca diferentes tipos de datos en el array
//    y encuentra la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = [42, "JavaScript", true, null, { lenguaje: "español" }, [1, 2, 3], undefined];

console.log("Longitud de mixedDataTypes:", mixedDataTypes.length); // Salida: 7

// 6. Declara un array llamado itCompanies y asígnale valores iniciales.
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log("itCompanies:", itCompanies);