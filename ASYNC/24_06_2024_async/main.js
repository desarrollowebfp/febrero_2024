/* fetch("https://ghibliapi.vercel.app/films")
  .then((res) => res.json())
  .then((res) => console.log(res));
 */

//ASYNC/AWAIT
const getMovies = async () => {
  //BUSCAMOS EL CONTENEDOR Y LE IMPRIMIMOS UN MENSAJE DE CARGA SI VA A TARDAR EL RESULTADO DE LA API
  const moviesContainer = document.querySelector("#movies");
  moviesContainer.innerHTML = `
  <li><h3>Loading...</h3></li>
  `
  //EJECUTAMOS EL FETCH GESTIONANDO LA ASINCRONIA CON AWAIT
  const respuestaOriginal = await fetch("https://ghibliapi.vercel.app/films");
  //TRANSFORMAMOS LOS DATOS EN JSON GESTIONANDO LA ASINCRONIA CON AWAIT
  const datosEnJson = await respuestaOriginal.json();
  //VACIAMOS EL CONTENEDOR DONDE HABIAMOS PINTADO EL CARGANDO
  moviesContainer.innerHTML = ``
  //MANDAMOS A PINTAR LAS PELICULAS QUE HEMOS RECIBIDO
  printMovies(datosEnJson);

};

//FUNCION QUE PINTA LAS PELICULAS
const printMovies = (movies) => {
  const moviesContainer = document.querySelector("#movies");
  for (const movie of movies) {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3>${movie.title}</h3>
    <h4>${movie.original_title}</h4>
    <img src="${movie.image}" alt="${movie.title} poster"/>
    `;
    moviesContainer.appendChild(li);
  }
};

getMovies();
