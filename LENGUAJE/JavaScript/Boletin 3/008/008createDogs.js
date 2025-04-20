"use strict"

// Crear un objeto vacío llamado dog
let dog = {};

// Imprimir el objeto dog en la consola
console.log("Objeto dog inicial:", dog);

// Añadir las propiedades name, legs, color, age y bark
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function () {
  return "woof woof";
};

// Obtener name, legs, color, age y el valor de bark
console.log("Nombre del perro:", dog.name);
console.log("Número de patas:", dog.legs);
console.log("Color del perro:", dog.color);
console.log("Edad del perro:", dog.age);
console.log("Sonido del perro:", dog.bark());

// Establecer nuevas propiedades al objeto dog: breed y getDogInfo
dog.breed = "Golden Retriever";
dog.getDogInfo = function () {
  return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}`;
};

// Mostrar el objeto actualizado y la información del perro
console.log("Objeto dog actualizado:", dog);
console.log("Información del perro:", dog.getDogInfo());