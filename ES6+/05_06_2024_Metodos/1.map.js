const numbers = [1, 2, 3, 4, 5];

const numbersx5 = numbers.map((number) => number * 5);
console.log(numbersx5);
//

const teams = [
  {
    name: "Real Madrid",
    yearFounded: 1902,
    country: "Spain",
    cupsWon: 95,
  },
  {
    name: "Manchester United",
    yearFounded: 1878,
    country: "England",
    cupsWon: 66,
  },
  {
    name: "FC Barcelona",
    yearFounded: 1899,
    country: "Spain",
    cupsWon: 93,
  },
  {
    name: "Bayern Munich",
    yearFounded: 1900,
    country: "Germany",
    cupsWon: 80,
  },
  {
    name: "Juventus",
    yearFounded: 1897,
    country: "Italy",
    cupsWon: 70,
  },
  {
    name: "Liverpool",
    yearFounded: 1892,
    country: "England",
    cupsWon: 64,
  },
  {
    name: "Paris Saint-Germain",
    yearFounded: 1970,
    country: "France",
    cupsWon: 43,
  },
  {
    name: "AC Milan",
    yearFounded: 1899,
    country: "Italy",
    cupsWon: 49,
  },
  {
    name: "Ajax",
    yearFounded: 1900,
    country: "Netherlands",
    cupsWon: 66,
  },
  {
    name: "Chelsea",
    yearFounded: 1905,
    country: "England",
    cupsWon: 34,
  },
];

const teamsNames = teams.map((team) => team.name);
console.log(teamsNames);

const customTeams = teams.map((team) => ({
  nombre: team.name,
  pais: team.country,
  titulos: team.cupsWon,
  campeones: team.cupsWon >= 50 ? true : false,
}));

console.log(customTeams);
