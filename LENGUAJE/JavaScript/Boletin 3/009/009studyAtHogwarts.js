"use strict"

// 1. Definimos la "función–objeto" constructor
function HogwartsStudent(nombre, casa, mascota, asignaturas, año, sangre, prefecto) {
    this.nombre = nombre;
    this.casa = casa;
    this.mascota = mascota;
    this.asignaturas = asignaturas;
    this.año = año;
    this.sangre = sangre;
    this.prefecto = prefecto;
  }
  
  // 2. Creamos la instancia de Hermione
  const hermione = new HogwartsStudent(
    "Hermione Granger",
    "Gryffindor",
    "Crookshanks",
    ["Pociones", "Transformaciones", "Encantamientos"],
    3,
    "mestiza",
    true
  );
  
  // Mostramos por consola nombre, casa y mascota
  console.log(`${hermione.nombre} – Casa: ${hermione.casa} – Mascota: ${hermione.mascota}`);
  
  // 3. Añadimos la propiedad patronus
  hermione.patronus = "Nutria";
  
  // 4. Añadimos la asignatura "Defensa Contra las Artes Oscuras"
  hermione.asignaturas.push("Defensa Contra las Artes Oscuras");
  
  // 5. Cambiamos el año a 4
  hermione.año = 4;
  
  // 6. Eliminamos la propiedad sangre
  delete hermione.sangre;
  
  // 7. Definimos la función para imprimir el resumen
  function printHogwartsStudent(student) {
    // Mapa de ordinales en español
    const ordinals = {
      1: "primer",
      2: "segundo",
      3: "tercer",
      4: "cuarto",
      5: "quinto",
      6: "sexto",
      7: "séptimo"
    };
    const ord = ordinals[student.año] || student.año;
    
    // Elegir artículo para el patronus (heurístico por terminación en 'a')
    const art = student.patronus.toLowerCase().endsWith("a") ? "una" : "un";
    
    console.log(
      `${student.nombre} es una estudiante de ${student.casa} en su ${ord} año. ` +
      `Tiene una mascota llamada ${student.mascota} y su patronus es ${art} ${student.patronus}. ` +
      `Sus asignaturas son: ${student.asignaturas.join(", ")}.`
    );
  }
  
  // 8. Invocamos con Hermione
  printHogwartsStudent(hermione);
  
  // 9. Reutilizamos para Ginny Weasley
  const ginny = new HogwartsStudent(
    "Ginny Weasley",
    "Gryffindor",
    "Arnold",
    ["Encantamientos", "Vuelo", "Pociones"],
    4,
    "pura",
    false
  );
  // Añadimos patronus y la asignatura de DCAO
  ginny.patronus = "Caballo";
  ginny.asignaturas.push("Defensa Contra las Artes Oscuras");
  // Eliminamos sangre para limpiar
  delete ginny.sangre;
  
  // 10. Invocamos con Ginny
  printHogwartsStudent(ginny);