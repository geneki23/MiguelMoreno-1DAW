"use strict"

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
  ];
  
  // 1. Meter a Peter Pan al final del array disney.
  disney.push({ nombre: "Peter Pan", pelicula: "Peter Pan" });
  
  // 2. Pintar el array.
  console.log("Después de agregar a Peter Pan al final:", disney);
  
  // 3. Meter a El capitán Garfio al principio del array, no olvides la película.
  disney.unshift({ nombre: "El capitán Garfio", pelicula: "Peter Pan" });
  
  // 4. Meter al cocodrilo detrás del capitán, no olvides la película.
  disney.splice(1, 0, { nombre: "Cocodrilo", pelicula: "Peter Pan" });
  console.log("Después de insertar al capitán Garfio y al cocodrilo:", disney);
  
  // 5. Obtener los personajes de la película de "Peter Pan" y mostrarlos uno a uno.
  console.log("Personajes de la película 'Peter Pan':");
  disney.forEach(personaje => {
    if (personaje.pelicula === "Peter Pan") {
      console.log(personaje.nombre);
    }
  });
  
  // 6. Encontrar el índice de Campanilla.
  let indiceCampanilla = disney.findIndex(personaje => personaje.nombre === "Campanilla");
  console.log("El índice de Campanilla es:", indiceCampanilla);
  
  // 7. Buscar al cocodrilo.
  let cocodrilo = disney.find(personaje => personaje.nombre === "Cocodrilo");
  console.log("Detalles del cocodrilo:", cocodrilo);
  
  // 8. Función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
  function shuffle(array) {
    // Algoritmo Fisher-Yates para barajar
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];  // Intercambio de elementos.
    }
    return array;
  }
  
  // Mostrando el array desordenado sin modificar el array original
  console.log("Array desordenado:", shuffle([...disney]));
  
  // Mostrar el array original para comparación.
  console.log("Array original:", disney);