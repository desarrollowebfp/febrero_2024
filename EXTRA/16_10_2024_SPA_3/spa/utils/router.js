// Importamos todas las páginas
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

// Definimos las rutas
const routes = [
  { path: "/", page: Home },
  { path: "/gallery", page: Gallery },
  { path: "/contact", page: Contact },
];

// Función principal del router
export const router = () => {
  // Obtenemos la ruta actual
  const path = window.location.pathname;

  // Buscamos la ruta en el array de rutas
  const route = routes.find((route) => route.path === path) || {
    page: NotFound,
  };

  // Renderizamos la página correspondiente
  route.page();
};

// Función para manejar la navegación sin recarga
export const navListeners = () => {
  const nav = document.querySelector("nav"); // Asegúrate de tener un `<nav>` en tu HTML
  if (!nav) return;

  // Usamos delegación de eventos
  nav.addEventListener("click", (ev) => {
    const link = ev.target.closest("a"); // Detectamos el enlace
    if (!link) return; // Si no es un enlace, salimos

    ev.preventDefault(); // Evitamos la recarga de la página

    // Actualizamos el historial del navegador
    const path = link.pathname;
    history.pushState(null, null, path);

    // Actualizamos las clases activas de los enlaces
    const navLinks = document.querySelectorAll("nav a");
    for (const el of navLinks) {
      el.classList.remove("active");
    }
    link.classList.add("active");

    // Llamamos al router para renderizar la nueva página
    router();
  });
};

// Inicialización del enrutador y listeners
window.addEventListener("DOMContentLoaded", () => {
  router(); // Renderizamos la ruta inicial
  navListeners(); // Configuramos los listeners para la navegación
});

// Detectamos cambios en el historial (navegación hacia adelante/atrás)
window.addEventListener("popstate", router);
