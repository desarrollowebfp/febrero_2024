const numbers = [1, 2, 3, 4, 5, 6, 7];

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

/* let acc = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  acc += number;
}
const total = acc; */

//FILTER
const superheroes = [
  { name: "Superman", power: 100, city: "Metropolis" },
  { name: "Batman", power: 85, city: "Gotham" },
  { name: "Wonder Woman", power: 95, city: "Themyscira" },
  { name: "Flash", power: 90, city: "Central City" },
  { name: "Aquaman", power: 80, city: "Atlantis" },
  { name: "Green Lantern", power: 88, city: "Coast City" },
  { name: "Cyborg", power: 75, city: "Detroit" },
  { name: "Spider-Man", power: 78, city: "New York" },
  { name: "Iron Man", power: 85, city: "New York" },
  { name: "Hulk", power: 98, city: "Dayton" },
];

const powerfulSuperheroes = superheroes.reduce((acc, superhero) => {
  if (superhero.power >= 80) {
    acc.push(superhero);
  }
  return acc;
}, []);
console.log(powerfulSuperheroes);

//FIND
const superman = superheroes.reduce((acc, superhero) => {
  if (superhero.name === "Superman") {
    return superhero;
  }
  return acc;
}, undefined);
console.log(superman);

//MAP
const doublePower = superheroes.reduce((acc, superhero) => {
  acc.push({
    ...superhero,
    power: superhero.power * 2,
  });
  return acc;
}, []);

console.log(doublePower);
