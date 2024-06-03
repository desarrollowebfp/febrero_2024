const sciFiMovies = [
  {
    name: "Blade Runner",
    year: 1982,
    director: "Ridley Scott",
  },
  {
    name: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
  },
  {
    name: "Inception",
    year: 2010,
    director: "Christopher Nolan",
  },
  {
    name: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
  },
  {
    name: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
  },
  {
    name: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
  },
  {
    name: "The Terminator",
    year: 1984,
    director: "James Cameron",
  },
  {
    name: "Alien",
    year: 1979,
    director: "Ridley Scott",
  },
  {
    name: "E.T. the Extra-Terrestrial",
    year: 1982,
    director: "Steven Spielberg",
  },
  {
    name: "Back to the Future",
    year: 1985,
    director: "Robert Zemeckis",
  },
];

/* const peliculas90 = [];

for (const movie of sciFiMovies) {
  if(movie.year >= 1990){
    peliculas90.push(movie)
  }
}

console.log(peliculas90) */

const peliculas90 = sciFiMovies.filter((movie) => movie.year >= 1990);
console.log(peliculas90);
const peliculasConO = sciFiMovies.filter(
  (movie) => movie.name.includes("o") || movie.name.includes("O")
);
console.log(peliculasConO)