import "./style.css";
import Main from "./components/Main/Main";

const init = () => {
  Main();
};

//Hemos pintado la aplicación
init();

//Creamos la función que trae las fotos de la API
const getPhotos = async (keyword, orientation) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${keyword}&orientation=${orientation}&client_id=${
      import.meta.env.VITE_UNSPLASH_KEY
    }`
  );
  const dataJSON = await data.json();
  const results = dataJSON.results;
  printPhotos(results);
};

const printPhotos = (photos) => {
  const gallery = document.querySelector("#gallery");
  //Vaciamos el contenedor antes de pintar para que no se acumulen las fotos de nuevas llamadas
  gallery.innerHTML = "";
  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
    <a href="${photo.links.download}" target="_blank" title="Click to download">
    <img src="${photo.urls.regular}" alt="${photo.alt_description}" />
    </a>
    `;
    gallery.appendChild(li);
  }
};

//Vamos a buscar fotos por defecto al arrancar la aplicación
getPhotos("cat", "squarish");

//Vamos a añadir el evento click de busqueda
document.querySelector("#searchBtn").addEventListener("click", () => {
  //Almaceno el valor del input de texto
  const textInputValue = document.querySelector("#searchInput").value;
  //Almaceno el valor del select
  const selectValue = document.querySelector("#orientationInput").value;
  //Ejecuto la función de busqueda de imagenes
  getPhotos(textInputValue, selectValue);
  //Cada vez que cliquemos en buscar, vamos a dejar vacio el input de texto
  document.querySelector("#searchInput").value = "";
});
