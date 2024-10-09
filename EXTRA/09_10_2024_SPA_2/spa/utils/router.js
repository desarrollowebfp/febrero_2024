//Importamos todas las páginas
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

//Vamos a crear un array de objetos para poder gestionar y acceder a cada una de las rutas
const routes = [
  {
    path: "/",
    page: Home,
  },
  {
    path: "/gallery",
    page: Gallery,
  },
  {
    path: "/contact",
    page: Contact,
  },
];

//Creamos una primera función llamada router que se va a encargar de renderizar la página correspondiente con la ruta que tengamos en el navegador, y va a gestionarlas mediante nuestro array de objetos routes
export const router = () => {
  //Recuperamos la ruta que hay en el navegador, o el path
  const path = window.location.pathname;
  //Intentamos sacar con un find la pagina coincidente con la ruta del navegador y la ruta de los objetos
  //Con destructuring creo una nueva constante sacando la propiedad page del resultado del find
  //Por seguridad, le vamos a poner una opción de que si no encuentra nada, en vez de romper el codigo sea un objeto vacio
  const route = routes.find((route) => route.path === path) || {};
  //Si tenemos una pagina que coincida con una de las rutas la vamos a pintar y si no pintamos el NotFound
  if (route.page) {
    route.page();
  } else {
    NotFound();
  }
};

