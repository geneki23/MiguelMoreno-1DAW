"use strict"

// Valores iniciales
let vidaJugador = 100;
let vidaMonstruo = 120;
let pociones = 3;

const ataqueMaxJugador = 20;
const ataqueMaxMonstruo = 15;
const curacionMaxPocion = 30;

// Función para obtener un entero aleatorio entre min y max (inclusive)
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Bucle principal del juego
while (vidaJugador > 0 && vidaMonstruo > 0) {
    let accion = prompt(
        "Elige una acción:\n" +
        "1. ⚔️ ATACAR MONSTRUO\n" +
        "2. 🧪 TOMAR POCIÓN\n" +
        "3. 🔍 BUSCAR POCIÓN\n" +
        "4. 🚪 SALIR\n" +
        "Tu elección:"
    );
    
    // Si se cancela o se elige salir, finaliza el juego.
    if (accion === null) break;
    
    accion = accion.toLowerCase().trim();
    if (accion === "4" || accion === "salir") {
        alert("🚪 Has decidido salir del juego.");
        break;
    }
    
    // Acciones del jugador
    if (accion === "1" || accion === "atacar" || accion === "atacar monstruo") {
        let daño = numeroAleatorio(1, ataqueMaxJugador);
        vidaMonstruo -= daño;
        alert("⚔️ Atacas al monstruo y le causas " + daño + " puntos de daño.");
        
    } else if (accion === "2" || accion === "tomar pocion") {
        if (pociones > 0) {
            let curacion = numeroAleatorio(1, curacionMaxPocion);
            vidaJugador += curacion;
            pociones--;
            alert("🧪 Tomas una poción y te curas " + curacion + " puntos.\nPociones restantes: " + pociones);
        } else {
            alert("❌ No tienes pociones para tomar.");
        }
        
    } else if (accion === "3" || accion === "buscar pocion") {
        let resultadoBusqueda = numeroAleatorio(1, 4);
        if (resultadoBusqueda === 1) {
            pociones++;
            alert("🎉 ¡Has encontrado una poción! Ahora tienes " + pociones + " pociones.");
        } else {
            alert("🔍 No encontraste ninguna poción.");
        }
        
    } else {
        alert("⚠️ Acción no válida. Intenta de nuevo.");
        continue;
    }
    
    // Verificar si el monstruo sigue vivo antes de que ataque
    if (vidaMonstruo > 0) {
        let ataqueDelMonstruo = numeroAleatorio(1, ataqueMaxMonstruo);
        vidaJugador -= ataqueDelMonstruo;
        alert("👹 El monstruo ataca y te causa " + ataqueDelMonstruo + " puntos de daño.");
    }
    
    // Mostrar el estado actual después de la ronda
    alert("📊 Estado actual:\n" +
                "❤️ Tu vida: " + vidaJugador + "\n" +
                "💀 Vida del monstruo: " + vidaMonstruo);
    
    
    if (vidaJugador <= 0 || vidaMonstruo <= 0) break;
}

// Mensaje final del juego
if (vidaJugador <= 0 && vidaMonstruo <= 0) {
    alert("💥 ¡Ambos han caído en combate!");
} else if (vidaJugador <= 0) {
    alert("☠️ ¡Has perdido! La vida se te ha agotado.");
} else if (vidaMonstruo <= 0) {
    alert("🏆 ¡Has ganado! Has derrotado al monstruo.");
} else {
    alert("🎮 Juego terminado.");
}
