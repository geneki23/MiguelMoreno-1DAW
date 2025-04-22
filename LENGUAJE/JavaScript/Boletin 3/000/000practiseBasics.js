"use  strict"

// 1. Declara un array vacío.
let arrayVacio = [];

// 2. Declara un array con más de 5 elementos.
let arrayNumeros = [10, 20, 30, 40, 50, 60];

// 3. Encuentra la longitud de tu array.
console.log("Longitud de arrayNumeros:", arrayNumeros.length); 

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

// 7. Imprime el array usando console.log().
console.log("Array de itCompanies:", itCompanies);

// 8. Imprime el número de empresas en el array.
console.log("Número de empresas:", itCompanies.length);

// 9. Imprime la primer empresa, la intermedia y la última empresa.
let firstCompany = itCompanies[0];
let middleIndex = Math.floor(itCompanies.length / 2);
let middleCompany = itCompanies[middleIndex];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log("Primera empresa:", firstCompany);
console.log("Empresa del medio:", middleCompany);
console.log("Última empresa:", lastCompany);

// 10. Imprime cada empresa.
console.log("Imprimiendo cada empresa:");
itCompanies.forEach(company => console.log(company));

// 11. Cambia el nombre de cada empresa a mayúsculas uno por uno e imprímelos.
console.log("Empresas en mayúsculas:");
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Imprime el array como una oración
let companiesSentence = "";
if (itCompanies.length > 1) {
  companiesSentence = itCompanies.slice(0, -1).join(", ") + " y " + itCompanies[itCompanies.length - 1];
} else {
  companiesSentence = itCompanies[0];
}
console.log(companiesSentence + " son grandes empresas de TI.");

// 13. Comprueba si existe una determinada empresa en el array
function checkCompany(companyName) {
  if (itCompanies.includes(companyName)) {
    return companyName;
  } else {
    return "La empresa " + companyName + " no existe";
  }
}
console.log("Comprobar 'Google':", checkCompany("Google"));
console.log("Comprobar 'Samsung':", checkCompany("Samsung"));

// 14. Filtra las empresas que tienen más de una 'o' sin el método filter()
let companiesWithMoreThanOneO = [];
for (let company of itCompanies) {
  let count = 0;
  for (let char of company.toLowerCase()) {
    if (char === "o") count++;
  }
  if (count > 1) companiesWithMoreThanOneO.push(company);
}
console.log("Empresas con más de una 'o':", companiesWithMoreThanOneO);

// 15. Ordena el array usando el método sort()
let sortedCompanies = [...itCompanies].sort();
console.log("Array ordenado:", sortedCompanies);

// 16. Invierte el array usando el método reverse()
let reversedCompanies = [...itCompanies].reverse();
console.log("Array invertido:", reversedCompanies);

// 17. Cortar las primeras 3 empresas del array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log("Primeras 3 empresas:", firstThreeCompanies);

// 18. Cortar las últimas 3 empresas del array
let lastThreeCompanies = itCompanies.slice(-3);
console.log("Últimas 3 empresas:", lastThreeCompanies);

// 19. Cortar la(s) empresa(s) intermedia(s) del array
let companiesCopyForMiddle = [...itCompanies];
let middleRemoveIndex = Math.floor(companiesCopyForMiddle.length / 2);
let removedMiddleCompany = companiesCopyForMiddle.splice(middleRemoveIndex, 1);
console.log("Empresa(s) intermedia(s) cortada(s):", removedMiddleCompany);
console.log("Array sin la(s) empresa(s) intermedia(s):", companiesCopyForMiddle);

// 20. Eliminar la primera empresa del array
let companiesCopy1 = [...itCompanies];
let removedFirst = companiesCopy1.shift();
console.log("Primera empresa eliminada:", removedFirst);
console.log("Array después de eliminar la primera empresa:", companiesCopy1);

// 21. Eliminar la(s) empresa(s) intermedia(s) del array
let companiesCopy2 = [...itCompanies];
let middleToRemove = Math.floor(companiesCopy2.length / 2);
let removedMiddleAgain = companiesCopy2.splice(middleToRemove, 1);
console.log("Empresa intermedia eliminada:", removedMiddleAgain);
console.log("Array después de eliminar la empresa intermedia:", companiesCopy2);

// 22. Eliminar la última empresa del array
let companiesCopy3 = [...itCompanies];
let removedLast = companiesCopy3.pop();
console.log("Última empresa eliminada:", removedLast);
console.log("Array después de eliminar la última empresa:", companiesCopy3);

// 23. Eliminar todas las empresas del array
let companiesCopy4 = [...itCompanies];
companiesCopy4.length = 0;
console.log("Array después de eliminar todas las empresas:", companiesCopy4);