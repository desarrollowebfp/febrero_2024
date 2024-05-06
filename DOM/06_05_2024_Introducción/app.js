//ATRAPAR NODOS
const title = document.querySelector("h1");

if (navigator.language === "en-EN") {
  title.textContent = "España";
}

const lis = document.querySelectorAll("ul > li");
console.log(lis[2]);

//CREAR NODOS
//Creamos una seccion vacia en HTML, un nuevo nodo
const section = document.createElement("section");
//Le modificamos el atributo id como si fuera un objeto
section.id = "seccion";
//La consultamos por consola
console.log(section);

//Recibimos un array con información
const cuadros = [
  "La Gioconda",
  "La noche estrellada",
  "El grito",
  "Las meninas",
  "Guernica",
  "La última cena",
  "La persistencia de la memoria",
  "La libertad guiando al pueblo",
  "La joven de la perla",
  "El beso",
];

cuadros.push("Ecce Homo")

//Recorremos los cuadros
for (const cuadro of cuadros) {
  //Por cada cuadro creamos un parrafo vacio
  const parrafo = document.createElement("p");
  //A cada uno de estos parrafos le insertamos el contenido de texto de cada uno de los cuadros
  parrafo.textContent = cuadro;
  //A la seccion que previamente hemos creado le insertamos como etiqueta hija cada uno de estos parrafos en cada una de las vueltas
  section.appendChild(parrafo)
}

document.body.appendChild(section)