import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const init = () => {
  Header();
  Main();
  Footer();
};

//Pintamos toda la aplicación
init();

//A partir de aqui todo existe en el HTML y lo puedo recuperar
const getPhotos = async (keyword, photoNum) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${photoNum}&client_id=L2oY7wcj9Ed4aAKV8qXxpoX7qC_bKRZk3xnfmMh3n4A`
  );
  const dataJSON = await data.json();
  const photos = dataJSON.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#gallery");
  container.innerHTML = "";
  for (const photo of photos) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src="${photo.urls.regular}" alt="${photo.alt_description}"/>
     `;
    container.appendChild(li);
  }
};

document.querySelector("#searchBtn").addEventListener("click", () => {
  const keywordValue = document.querySelector("#searchInput").value;
  const photoNumValue = document.querySelector("#countInput").value;
  getPhotos(keywordValue, photoNumValue);
  document.querySelector("#searchInput").value = "";
});

//Cuando arranque la pagina va a sacar fotos de Lego y 10 resultados
getPhotos("Lego", "10");
