const APIURL = "http://localhost:3000/movies/";

//Añadimos eventos a los formularios
document.querySelector("#addMovieForm").addEventListener("submit", (ev) => {
  addMovie();
});

document.querySelector("#editMovieForm").addEventListener("submit", (ev) => {
  updateMovie();
});

//GET MOVIES
const getMovies = () => {
  fetch(APIURL)
    .then((res) => res.json())
    .then((res) => {
      for (const movie of res) {
        document.querySelector("#movieContainer").innerHTML += `
      <article class="movie">
        <img src="${movie.poster}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <h4>${movie.year}</h4>
        <h4>${movie.director}</h4>
        <button onclick="editMovie(${movie.id})">Edit</button>
        <button onclick="deleteMovie(${movie.id})">Delete</button>
      </article>
      `;
      }
    })
    .catch((error) => {
      console.log("No se han podido cargar las peliculas", error);
    });
};

// ADD MOVIE
const addMovie = () => {
  //Vamos a crear nuestra nueva película
  const newMovie = {
    title: document.querySelector("#title").value,
    poster: document.querySelector("#poster").value,
    year: document.querySelector("#year").value,
    director: document.querySelector("#director").value,
  };
  //Mandar la información a mi DB
  //Cambiamos el metodo del fetch, le decimos en las cabeceras que el contenido va a ser de tipo JSON y transformamos a JSON la newMovie para que la reciba en su formato correcto
  fetch(APIURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie),
  }).then(() => {
    document.querySelector("#addMovieForm").reset();
  });
};

// DELETE MOVIE
const deleteMovie = (id) => {
  if (confirm("¿Seguro que quieres borrar la película?")) {
    fetch(APIURL + id, {
      method: "DELETE",
    }).then(() => {
      getMovies();
    });
  }
};

// EDIT MOVIE
const editMovie = (id) => {
  fetch(APIURL + id)
    .then((res) => res.json())
    .then((res) => {
      //Pintamos los valores en el formulario de editar con la respuesta de nuestra DB
      document.querySelector("#editId").value = res.id;
      document.querySelector("#editTitle").value = res.title;
      document.querySelector("#editPoster").value = res.poster;
      document.querySelector("#editYear").value = res.year;
      document.querySelector("#editDirector").value = res.director;
      //Mostramos el formulario de editar y ocultamos el de añadir
      document.querySelector("#editMovieForm").style.display = "block";
      document.querySelector("#addMovieForm").style.display = "none";
    });
};

const updateMovie = () => {
  //Recupero el id de la pelicula que quiero editar
  const id = document.querySelector("#editId").value;
  //Construyo la pelicula que quiero editar
  const updatedMovie = {
    title: document.querySelector("#editTitle").value,
    poster: document.querySelector("#editPoster").value,
    year: document.querySelector("#editYear").value,
    director: document.querySelector("#editDirector").value,
  };
  //En el caso de PUT (Actualizar) tenemos que apuntar a la pelicula que queremos actualizar para que la edite
  fetch(APIURL + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMovie),
  })
    .then(() => {
      getMovies();
    })
    .then(() => {
      //Reseteamos el formulario de editar y volvemos a ocultar el formulario de edición para mostrar el de añadir una nueva película
      document.querySelector("#editMovieForm").reset();
      document.querySelector("#editMovieForm").style.display = "none";
      document.querySelector("#addMovieForm").style.display = "block";
    });
};

//Por defecto la función que se lanza cuando arranca la aplicación es GET MOVIES
getMovies();
