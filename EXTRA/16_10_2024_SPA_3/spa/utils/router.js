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

//MEJORAS

//Le vamos añadir un evento popstate al objeto window para que lance el router cada vez que viajemos hacia adelante o atrás en el navegador
window.addEventListener("popstate", router);
//Le añadimos tambien la misma funcionalidad al evento DOMContentLoaded para que cuando se modifique el contenido vuelva a lanzar el router y pinte todo correctamente
window.addEventListener("DOMContentLoaded", router);

//Vamos a alterar el comportamiento por defecto de los enlaces para que la web no recargue
//El primer paso será recuperar todos los enlaces
export const navListeners = () => {
  const navLinks = document.querySelectorAll("nav a");
  for (const link of navLinks) {
    link.addEventListener("click", (ev) => {
      //Vamos a eliminar el comportamiento por defecto
      ev.preventDefault();
      //Le quitamos el estilo activo a todos
      for (const el of navLinks) {
        el.classList.remove("active")
      }
      //Como ahora no podemos navegar con los enlaces tenemos que hacerlo manualmente
      //1º Recuperamos el valor del href de cada uno de estos enlaces
      const path = ev.target.pathname;
      //Vamos a "empujar" esta ruta en el historial de navegacion para forzar a que navegue el navegador
      history.pushState(null, null, path);
      //Comprobamos que la ruta es correcta y pintamos la pagina correspondiente haciendo uso de nuestra funcion router
      //Comprobamos si el link donde se ha hecho click tiene el href igual que en el navegador y si es asi le añadimos una clase y si no se la quitamos
      if (ev.target.pathname === window.location.pathname) {
        link.classList.add("active");
      }
      router();
    });
  }
};
