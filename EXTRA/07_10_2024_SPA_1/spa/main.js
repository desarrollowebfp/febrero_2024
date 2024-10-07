import "./style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

import linkpage from "./utils/linkpage";

const init = () => {
  Header();
  //Pintamos Home al arrancar para que se vea una pagina por defecto
  Home();
  Footer();
  //Añadimos los listeners a los links para pintar las diferentes páginas
  linkpage("#homeLink", Home);
  linkpage("#galleryLink", Gallery);
  linkpage("#contactLink", Contact);
};

//Ejecutamos la función que pinta la aplicación base
init();
