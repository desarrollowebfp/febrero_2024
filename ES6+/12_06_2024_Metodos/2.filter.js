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

const powerfulSuperheroes = superheroes.filter(
  (superhero) => superhero.power >= 80
);
console.log(powerfulSuperheroes);

const superheroesWithE = superheroes.filter((superhero) =>
  superhero.name.includes("e")
);
console.log(superheroesWithE);

const newArray = [...powerfulSuperheroes, ...superheroesWithE];
