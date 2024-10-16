import "./style.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { router, navListeners } from "./utils/router";

//Esta función pinta los elementos estáticos
const init = () => {
  Header();
  Footer();
};

//Ejecutamos la función que pinta la aplicación base
init();
//Ejecutamos el router cada vez que arranca la aplicación
router();
//Ejecutamos navListeners
navListeners()