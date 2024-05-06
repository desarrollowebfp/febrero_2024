function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();
sayHello();

function sayHelloWithName(name) {
  console.log("Hello " + name);
}

sayHelloWithName("Pepito");

function sumaNumeros(numA, numB = 10) {
  console.log(numA + numB);
}

sumaNumeros(5, 5);
sumaNumeros(5);

const listado = [1, 2, 3, 4, 5, 6];
const segundoListado = [5, 6, 7, 8, 9, 10];

function recorreListados(datos) {
  for (const elemento of datos) {
    console.log(elemento);
  }
}

recorreListados(listado);
recorreListados(segundoListado);


function doubleNum(num){
  const result = num * 2;
  return result
}

const total = doubleNum(20);
console.log(total)

