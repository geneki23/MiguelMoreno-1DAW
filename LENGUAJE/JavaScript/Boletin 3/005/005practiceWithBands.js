"use strict"

let grupos = [
  { nombre: "ACDC", genero: "Rock" },
  { nombre: "Cold Play", genero: "Pop" },
  { nombre: "NCT Dream", genero: "K-Pop" },
  { nombre: "Metallica", genero: "Heavy Metal" }
];

// Filtra los grupos por género obteniendo aquellos que son de Heavy Metal
let heavyMetalGroups = grupos.filter(grupo => grupo.genero === "Heavy Metal");
console.log(heavyMetalGroups); 

// Busca en los grupos usando “find” el grupo con Nombre “Cold Play”
let coldPlayGroup = grupos.find(grupo => grupo.nombre === "Cold Play");
console.log(coldPlayGroup); 

// ¿En qué posición del array se encuentra “Cold Play”?
let coldPlayIndex = grupos.findIndex(grupo => grupo.nombre === "Cold Play");
console.log(coldPlayIndex);