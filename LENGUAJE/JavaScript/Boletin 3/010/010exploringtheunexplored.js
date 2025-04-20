"use strict"

// 1. Crea un Map vacío
const personajesUp = new Map();

// 2. Añade los personajes y sus roles
personajesUp.set("Carl Fredricksen", "Protagonista principal");
personajesUp.set("Russell", "Explorador entusiasta");
personajesUp.set("Dug", "Perro que habla");
personajesUp.set("Kevin", "Ave tropical gigante");
personajesUp.set("Charles Muntz", "Antagonista");

// 3. Muestra por consola el contenido inicial del Map
console.log("Contenido inicial de personajesUp:", personajesUp);

// 4. Comprueba con has() si existen "Russell" y "Alpha"
console.log('¿Existe "Russell"?', personajesUp.has("Russell")); // true
console.log('¿Existe "Alpha"?', personajesUp.has("Alpha"));     // false

// 5. Obtén y muestra el rol de "Dug" con get()
console.log('Rol de "Dug":', personajesUp.get("Dug")); // "Perro que habla"

// 6. Actualiza el valor asociado a "Russell"
personajesUp.set("Russell", "Explorador leal y valiente");
console.log('Nuevo rol de "Russell":', personajesUp.get("Russell"));

// 7. Elimina a "Charles Muntz" y muestra el contenido restante
personajesUp.delete("Charles Muntz");
console.log("Después de eliminar a Charles Muntz:", personajesUp);

// 8. Itera con forEach() y muestra cada par formateado
personajesUp.forEach((rol, nombre) => {
  console.log(`${nombre}: ${rol}`);
});

// 9. Muestra cuántos personajes hay actualmente
console.log("Número de personajes ahora:", personajesUp.size);

// 10. Vacía el Map y verifica que esté vacío
personajesUp.clear();
console.log("Contenido tras clear():", personajesUp);       
console.log("Tamaño tras clear():", personajesUp.size);    
