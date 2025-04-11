"use strict"

// Definición de los colores disponibles y su representación con emoji
const colores = ["rojo", "azul", "verde", "amarillo"];
const emojis = {
  "rojo": "🔴",
  "azul": "🔵",
  "verde": "🟢",
  "amarillo": "🟡"
};

// Función para generar un color aleatorio
function obtenerColorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}

// Función para mostrar la secuencia en pantalla (usando alert) con emojis
function mostrarSecuencia(secuencia) {
  let secuenciaStr = secuencia.map(color => emojis[color]).join(" ");
  alert("Secuencia: " + secuenciaStr);
}

// Función para solicitar la secuencia de entrada del usuario y verificarla
function pedirSecuenciaUsuario(secuencia) {
  for (let i = 0; i < secuencia.length; i++) {
    let respuesta = prompt(`Ingresa el color número ${i + 1} de la secuencia:`);
    if (respuesta !== secuencia[i]) {
      return false;
    }
  }
  return true;
}

// Variante 1: Juego indefinido hasta error.
function juegoIndefinido() {
  let secuencia = [];
  let ronda = 0;
  
  while (true) {
    // Agregar un nuevo color a la secuencia
    secuencia.push(obtenerColorAleatorio());
    ronda++;
    
    
    mostrarSecuencia(secuencia);
    
    // Pedir al usuario que ingrese la secuencia
    if (!pedirSecuenciaUsuario(secuencia)) {
      alert("¡Error en la secuencia! Has superado " + (ronda - 1) + " ronda(s).");
      break;
    }
    
    alert("¡Correcto! Has pasado la ronda " + ronda + ".");
  }
}

// Variante 2: Definir cantidad de rondas a superar
function juegoPorRondas() {
  let rondasObjetivo = parseInt(prompt("Ingresa la cantidad de rondas que deseas superar:"), 10);
  if (isNaN(rondasObjetivo) || rondasObjetivo < 1) {
    alert("Número de rondas no válido. Se finalizará el juego.");
    return;
  }
  
  let secuencia = [];
  let ronda = 0;
  
  while (ronda < rondasObjetivo) {
    // Agregar un nuevo color a la secuencia
    secuencia.push(obtenerColorAleatorio());
    ronda++;
    
    
    mostrarSecuencia(secuencia);
    
    // Solicitar y verificar la secuencia
    if (!pedirSecuenciaUsuario(secuencia)) {
      alert("¡Error en la secuencia! No lograste completar las " + rondasObjetivo + " rondas.");
      return;
    }
    
    alert("¡Correcto! Has pasado la ronda " + ronda + " de " + rondasObjetivo + ".");
  }
  
  alert("¡Felicidades! Has completado las " + rondasObjetivo + " rondas sin errores.");
}

// Menú principal para elegir la variante del juego
function iniciarSimonDice() {
  let modo = prompt("Bienvenido a 'Simón dice'.\n\nEscribe 'indefinido' para jugar sin límite de rondas o 'rondas' para elegir una cantidad fija de rondas:").toLowerCase().trim();
  if (modo === "indefinido") {
    juegoIndefinido();
  } else if (modo === "rondas") {
    juegoPorRondas();
  } else {
    alert("Opción no reconocida. Por favor, recarga la página e intenta de nuevo.");
  }
}

// Ejecutar el juego
iniciarSimonDice();
