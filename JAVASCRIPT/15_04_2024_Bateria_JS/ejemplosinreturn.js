let counter = 0;

const randomNumsOne = [1, 2, 3, 4, 5, 6, 7, 8];
const randomNumsTwo = [9, 10, 139, 57];
const randomNumsThree = [12, 87, 34];

function sumNumbers(numberList) {
  for (const number of numberList) {
    counter += number;
  }
}

sumNumbers(randomNumsOne);
console.log(counter);
sumNumbers(randomNumsTwo);
console.log(counter);

//

const miArray = [];

function empujarElementos(elemento) {
  miArray.push(elemento + " Perez");
}


empujarElementos("Pato");
empujarElementos("Botella");
empujarElementos("Perro");

console.log(miArray)