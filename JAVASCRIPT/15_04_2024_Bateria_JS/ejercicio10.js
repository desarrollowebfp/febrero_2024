const numbers = [12, 21, 38, 5, 45, 37, 6];
const notas = [5, 6, 4];

function average(numberList) {
  let total = 0;

  for (const number of numberList) {
    total += number;
  }

  const result = total / numberList.length;
  return result;
}

console.log(average(numbers));

const resultado2 = average(notas);
console.log(resultado2);