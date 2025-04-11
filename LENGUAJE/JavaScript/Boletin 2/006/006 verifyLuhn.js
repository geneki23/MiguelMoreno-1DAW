"use strict"

function pasaLuhn(numero) {
    //Variable
    let suma = 0;
  
    for (let i = 0; i < digitos.length; i++) {
      let idx = digitos.length - 1 - i;
      let digito = digitos[idx];
      if ((i + 1) % 2 === 0) {
        digito *= 2;
        if (digito > 9) digito -= 9;
      }
      suma += digito;
    }
  
    return suma % 10 === 0;
  }
  
  // Ejemplo
  console.log(pasaLuhn("4012-8888-8888-1881"));