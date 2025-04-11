function validarTarjeta(numero) {
    // Eliminar todos los caracteres que no sean dígitos
    const digitos = numero.replace(/\D/g, '');
    
    // Verificar que sea un número Luhn válido primero
    if (!esLuhnValido(digitos)) {
        return "invalid ❌";
    }
    
    // Determinar el tipo de tarjeta
    if (esAmericanExpress(digitos)) {
        return "American Express 💳 ✅";
    } else if (esVisa(digitos)) {
        return "Visa 💳 ✅";
    } else if (esMasterCard(digitos)) {
        return "MasterCard 💳 ✅";
    } else {
        return "invalid ❌";
    }
}

// Función  para validar algoritmo de Luhn
function esLuhnValido(digitos) {
    if (digitos.length === 0 || !/^\d+$/.test(digitos)) {
        return false;
    }
    
    let suma = 0;
    let doble = false;
    
    for (let i = digitos.length - 1; i >= 0; i--) {
        let digito = parseInt(digitos.charAt(i), 10);
        
        if (doble) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        
        suma += digito;
        doble = !doble;
    }
    
    return suma % 10 === 0;
}

// Funciones para validar cada tipo de tarjeta
function esAmericanExpress(digitos) {
    const primerosDos = digitos.substring(0, 2);
    return (digitos.length === 15) && 
           (primerosDos === '34' || primerosDos === '37');
}

function esVisa(digitos) {
    const primerDigito = digitos.charAt(0);
    const longitud = digitos.length;
    return (primerDigito === '4') && 
           (longitud === 13 || longitud === 16);
}

function esMasterCard(digitos) {
    const primerosDos = digitos.substring(0, 2);
    return (digitos.length === 16) && 
           (primerosDos >= '51' && primerosDos <= '55');
}

// Ejemplos de uso:
console.log(validarTarjeta("4012-8888-8888-1881")); // Visa 💳 ✅
console.log(validarTarjeta("378282246310005"));     // American Express 💳 ✅
console.log(validarTarjeta("5555555555554444"));    // MasterCard 💳 ✅
console.log(validarTarjeta("1234567890123456"));    // invalid ❌