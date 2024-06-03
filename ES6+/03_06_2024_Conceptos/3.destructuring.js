const batman = {
  name: "Batman",
  realName: "Bruce Wayne",
  city: "Gotham",
  age: 55,
};

/* const name = batman.name;
const realName = batman.realName;
const city = batman.city;
const age = batman.age;
 */
const { name, realName, city, age } = batman;

const lista = ["Berserk", "Evangelion", "Scott Pilgrim", "Spiderman"];

const [primero, segundo, tercero, cuarto] = lista;
console.log(tercero);

let first;
let second;
let third;

[first, second, third] = [1, 2, 3];

console.log(second);
