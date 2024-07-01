import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

//TENEIS QUE HACER UN .env CON UNA CLAVE LLAMADA VITE_CLIENT_ID=vuestraClaveDeApi

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const buildWebsite = () => {
  Header();
  Main();
  Footer();
  getPhotos("space");
};

const getPhotos = async (keyword) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${CLIENT_ID}`
  );
  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";
    message.textContent = "Search another thing...";
  } else {
    //Vaciamos el contenedor para que no se sumen las fotos a las ya existentes. Tambien vaciamos el texto del mensaje si todo funciona bien
    container.innerHTML = "";
    message.textContent = "He encontrado " + photos.length + " fotos:";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
  <img src="${photo.urls.regular}" alt="${photo.alt_description}" style="border: 10px solid ${photo.color};"/>
  `;
      container.appendChild(li);
    }
  }
};

//Primero pintamos toda la web
buildWebsite();

//Despues le damos el listener al botón que ahora si existe
document.querySelector("#searchBtn").addEventListener("click", () => {
  const value = document.querySelector("#searchInput").value;
  getPhotos(value);
  document.querySelector("#searchInput").value = "";
});
