fetch("http://localhost:3000/movies")
  .then((res) => res.json())
  .then((res) => {
    for (const movie of res) {
      document.querySelector("main").innerHTML += `
      <article>
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}"/>
        <p>${movie.year}</p>
      </article>
    `;
    }
  });

document.querySelector("#newMovieForm").addEventListener("submit", () => {
  //Rescato la información de cada uno de los inputs
  const title = document.querySelector("#title").value;
  const poster = document.querySelector("#poster").value;
  const year = document.querySelector("#year").value;
  //Vamos a montar un nuevo objeto que sea una nueva película
  const newMovie = {
    title: title,
    poster: poster,
    year: year,
  };
  //Vamos a hacer un fetch de tipo POST a el endpoint movies
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie),
  });
});
