//2.1
const jedi = { nombre: "Luke Skywalker", edad: 19 };
//En esta linea accedemos a la clave (o propiedad) edad y le reasignamos otro valor, en este caso 25
jedi.edad = 25;
console.log(jedi);
//2.2
const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

const frase =
  "Soy " +
  nombre +
  " " +
  apellido +
  ", tengo " +
  edad +
  " años, y soy una princesa de Alderaan.";
console.log(frase);

//2.3
const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const resultado = sable1.precio + sable2.precio;
console.log(resultado);

//2.4
let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

// Tu código para actualizar el precio final de cada nave aquí...
nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;
console.log(nave1);
console.log(nave2);
