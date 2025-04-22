"use strict";

let productos = [
    { id: 1, categoria: "bebida", precio: 1.5, cantidad: 100 },
    { id: 2, categoria: "comida",   precio: 3.2, cantidad: 52 },
    { id: 3, categoria: "bebida", precio: 2.0, cantidad: 80 },
    { id: 4, categoria: "bebida", precio: 1.59, cantidad:  96 },
    { id: 5, categoria: "hogar", precio: 5.99, cantidad:  12 }
  ];

  //Funcion para calcular inventario
  function calcularValorInventario(productos) {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
      total += productos[i].precio * productos[i].cantidad;
    }
    return total;
  }

   
    let valorInventario = calcularValorInventario(productos);

    
    let categoriasMap = new Map();
    // Agrupar productos por categoría
    for (let producto of productos) {
        if (!categoriasMap.has(producto.categoria)) {
            categoriasMap.set(producto.categoria, []);
        }
        categoriasMap.get(producto.categoria).push(producto);
    }

    // Mostrar el Map 
    console.log(categoriasMap);

    
    function descontarCategoria(productos, categoria, porcentaje) {

        let productosActualizados = productos.map(producto => {
            if (producto.categoria === categoria) {
                return {
                    ...producto,
                    precio: producto.precio * (1 - porcentaje / 100)
                };
            }
            return producto;
        });
        return productosActualizados;
    }
    
    function categoriasDisponibles(productos) {
        let categorias = new Set(productos.map(producto => producto.categoria));
        return categorias;
    }


    //Ejercicio 2

    //a
    let varitaLiteral = {
        nombre: "Varita de Sauco",
        poder: "Magia Oscura",
        nivel: 10
    };
    
    //b
    function crearPocion(nombre, efecto, cantidad) {
        return {
            nombre: nombre,
            efecto: efecto,
            cantidad: cantidad
        };
    }

    let pocionCurativa = crearPocion("Poción Curativa", "Recupera salud", 5);
    let pocionMana = crearPocion("Poción de Maná", "Recupera maná", 3);

    console.log(pocionCurativa);
    console.log(pocionMana);


    //c
    function Artefacto(nombre, material, rareza) {
        this.nombre = nombre;
        this.material = material;
        this.rareza = rareza;
    }

    Artefacto.prototype.describir = function() {
        return `Artefacto: ${this.nombre} (material: ${this.material}, rareza: ${this.rareza})`;
    };

    let artefacto1 = new Artefacto("Amuleto", "Oro", "Épico");
    let artefacto2 = new Artefacto("Espada de Cristal", "Cristal", "Legendario");

    console.log(artefacto1.describir());
    console.log(artefacto2.describir());

    //d

    class Reliquia {
        constructor(nombre, origen, nivelMágico) {
            this.nombre = nombre;
            this.origen = origen;
            this.nivelMágico = nivelMágico
        }

        toString() {
            return `Reliquia ${this.nombre} de origen ${this.origen}, nivel mágico: ${this.nivelMágico}`;
        }
    }   
    let reliquia1 = new Reliquia("Cáliz Sagrado", "Edad Media", 9);
        
    console.log(reliquia1.toString());



    //e

    let baseMagica = {
        activar() {
            return `Activando ${this.nombre}...`;
        }
    };

    let amuleto = Object.create(baseMagica);

    //f

    // array bestiario
    let bestiario = [
        varitaLiteral,
        pocionCurativa,
        pocionMana,
        artefacto1,
        artefacto2,
        reliquia1,
        amuleto
    ];

    
    let mapeoNombres = new Map();
    for (let objeto of bestiario) {
        mapeoNombres.set(objeto.nombre, objeto);
    }

   
    let nivelesUnicos = new Set();
    for (let objeto of bestiario) {
        if (objeto.nivel !== undefined) {
            nivelesUnicos.add(objeto.nivel);
        } else if (objeto.rareza !== undefined) {
            nivelesUnicos.add(objeto.rareza);
        } else if (objeto.nivelMágico !== undefined) {
            nivelesUnicos.add(objeto.nivelMágico);
        }
    }

    
    for (let objeto of bestiario) {
        let tipoCreacion = "desconocido";
        if (objeto === varitaLiteral) {
            tipoCreacion = "literal";
        } else if (objeto === pocionCurativa || objeto === pocionMana) {
            tipoCreacion = "fábrica";
        } else if (objeto instanceof Artefacto) {
            tipoCreacion = "constructor";
        } else if (objeto instanceof Reliquia) {
            tipoCreacion = "clase";
        } else if (Object.getPrototypeOf(objeto) === baseMagica) {
            tipoCreacion = "Object.create";
        }
        console.log(`Nombre: ${objeto.nombre}, Tipo de creación: ${tipoCreacion}`);
    }

    // Muestra el tamaño del Set
    console.log(`Tamaño del Set de niveles/rareza únicos: ${nivelesUnicos.size}`);



    

    

        

        
        
    

    

