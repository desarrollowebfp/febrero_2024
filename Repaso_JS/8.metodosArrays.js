const list = ["Perro", "Gato", "Pato"];

list.push("Pelicano");
console.log(list);
list.pop();
console.log(list);
list.shift();
console.log(list);
list.unshift("Perrito");
console.log(list);

list.sort();
console.log(list);
list.reverse();
console.log(list);

console.log(list.indexOf("Pato"));
console.log(list.indexOf("Paco"));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

const copia = array3.slice(2, 4);
console.log(copia);

array3.splice(2, 2, "Hueco");
console.log(array3)