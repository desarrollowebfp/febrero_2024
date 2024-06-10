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

const winnerTeams = teams.filter((team) => team.cupsWon >= 80);
console.log(winnerTeams);

const spanishTeams = teams.filter((team) => team.country === "Spain");
console.log(spanishTeams);

const spanishAndEnglandTeams = teams.filter(
  (team) => team.country === "Spain" || team.country === "England"
);
console.log(spanishAndEnglandTeams);
