"use strict"

function generateUniqueRandomNumbers() {
  let numbers = [];
  while (numbers.length < 7) {
    let randomNum = Math.floor(Math.random() * 10); // Genera un número entre 0 y 9
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum); // Agrega el número si no está ya en el array
    }
  }
  return numbers;
}

console.log(generateUniqueRandomNumbers());