function sayHello() {
  console.log("Hello!");
}

sayHello();

//

function sayHelloWithName(name) {
  console.log("Hello " + name);
}

sayHelloWithName("Marta");
sayHelloWithName("Ruben");

//

function sumNums(numA, numB) {
  const total = numB + numA;
  console.log(total);
}

sumNums(5, 8);
sumNums(100, 34);

//

function IMC(pesoKG, alturaMs, name) {
  const resultado = pesoKG / (alturaMs * alturaMs);

  if (resultado < 18.5) {
    console.log(name + ", tu IMC es: Peso bajo", resultado);
  } else if (resultado >= 18.5 && resultado < 25) {
    console.log(name + ", tu IMC es: Peso normal", resultado);
  } else if (resultado >= 25 && resultado < 30) {
    console.log(name + ", tu IMC es: Sobrepeso", resultado);
  } else {
    console.log(name + ", tu IMC es: Obesidad", resultado);
  }
}

IMC(6, 0.4, "Pikachu");
IMC(95, 1.88, "Batman");
