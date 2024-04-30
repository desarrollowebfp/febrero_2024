const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 125 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortMovies = [];
const standardMovies = [];
const longMovies = [];

for (const movie of movies) {
  if (movie.durationInMinutes <= 100) {
    shortMovies.push(movie);
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    standardMovies.push(movie);
  } else {
    longMovies.push(movie);
  }
}

console.log("Peliculas cortas: ", shortMovies);
console.log("Peliculas normales: ", standardMovies);
console.log("Peliculas largas: ", longMovies);
