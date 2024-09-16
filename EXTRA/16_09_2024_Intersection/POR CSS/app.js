/* //Intersection Observer
const h3 = document.querySelector("h3");

//La función que manipula el elemento que queremos detectar
const handleIntersection = (entries) => {
  //Recorremos todas las "entradas"
  entries.map((entry) => {
    //Esto va a ocurrir cuando el o los elementos entren en pantalla
    if (entry.isIntersecting) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
};

//Creamos el observador de intersectores
const observer = new IntersectionObserver(handleIntersection);

//Le mandamos al observador que observe el elemento o elementos que queramos
observer.observe(h3);
 */