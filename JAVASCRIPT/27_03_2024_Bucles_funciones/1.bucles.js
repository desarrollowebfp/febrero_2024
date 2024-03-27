//For
for (let i = 0; i < 5; i++) {
  console.log(i);
  // i = 0,  SE CUMPLE, ++ -> console -> 0
  // i = 1, SE CUMPLE, ++ -> console -> 1
  // i = 2, SE CUMPLE, ++ -> console -> 2
  // i = 3, SE CUMPLE, ++ -> console -> 3
  // i = 4, SE CUMPLE, ++ -> console -> 4
  // i = 5, NO SE CUMPLE, SE ROMPE EL BUCLE -> SE TERMINA EL BUCLE
}

const perros = [
  "Corgi",
  "Labrador",
  "Galgo",
  "Collie",
  "Yorkshire",
  "Pastor Alemán",
];
//GO TO HELL
console.log(perros.length); //-> 6

for (let i = 0; i < perros.length; i++) {
  const perro = perros[i];
  console.log(perro);
  // i = 0, SE CUMPLE, ++ -> perro = perros[0] -> perro = "Corgi";
  // i = 1, SE CUMPLE, ++ -> perro = perros[1] -> perro = "Labrador";
  // i = 2, SE CUMPLE, ++ -> perro = perros[2] -> perro = "Galgo";
  // i = 3
  // i = 4
  // i = 5, SE CUMPLE, ++ -> perro = perros[5] -> perro = "Pastor Alemán";
  // i = 6, NO SE CUMPLE, SE ACABA EL BUCLE
}

const personas = [
  "Miercoles",
  "Fetido",
  "Pugsley",
  "Morticia",
  "Gomez",
  "Cosa",
];

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i] + " Addams";
  console.log(persona);
}

const numeros = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numeros.length; i++) {
  const numeroDoble = numeros[i] * 2;
  console.log(numeroDoble);
}

const palabras = ["Cable", "Byron", "Dinosaurio", "Taza", "Teclado"];

for (let i = 0; i < palabras.length; i++) {
  const frase = palabras[i] + " - Letras: " + palabras[i].length;
  console.log(frase);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let contador = 0;

for (let i = 0; i < numbers.length; i++) {
  contador += numbers[i];
}

console.log(contador);

//Forof
const dogs = [
  "Corgi",
  "Labrador",
  "Galgo",
  "Collie",
  "Yorkshire",
  "Pastor Alemán",
];
//GO TO HELL
console.log(dogs.length); //-> 6

for (let i = 0; i < dogs.length; i++) {
  const dog = dogs[i];
  console.log(dog);
}

for (const dog of dogs) {
  console.log(dog);
}

//Foreach
dogs.forEach((dog) => {
  console.log(dog);
});
