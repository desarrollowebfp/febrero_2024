const getMovies = async () => {
  const res = await fetch("https://ghibliapi.vercel.app/films");
  const dataJSON = await res.json();
  printMovies(dataJSON);
};

const printMovies = (movies) => {
  movies.forEach((movie) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>${movie.title}</h2>
    <h3>${movie.original_title}</h3>
    `;
    const img = document.createElement("img");
    img.src = movie.image;
    img.alt = movie.title;
    img.addEventListener("click", () => {
      printMovie(movie)
    });
    li.appendChild(img);

    document.querySelector("#movies").appendChild(li);
  });
};

const printMovie = (movie) => {
  document.querySelector("#movie").innerHTML = `
  <h2>${movie.title}</h2>
  <h3>${movie.original_title}</h3>
  <img src="${movie.movie_banner}" alt="${movie.title} Banner"/>
  <p>${movie.description}</p>
  <p>${movie.director}</p>
  <p>${movie.release_date}</p>
  <p>${movie.running_time} min</p>
  <button id="closeBtn">Go back</button>
  `;
  //Le añadimos la clase open para que se muestre con la clase open y se vea el modal
  document.querySelector("#movie").classList.add("open");
  //Le añadimos un evento click al botón que se ha creado dentro del modal para que quite la clase open
  document.querySelector("#closeBtn").addEventListener("click", () => {
    document.querySelector("#movie").classList.remove("open");
  });
};

//Se ejecuta por defecto
getMovies();