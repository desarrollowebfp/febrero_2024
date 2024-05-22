//Importar los estilos de Header
import "./Header.css";

//Definir una función que crea el template
const template = () => {
  return `
  <h1>Byron Portfolio</h1>
  <nav>
    <ul>
      <li>
        <a href="#null" id="aboutLink">About me</a>
      </li>
      <li>
        <a href="#null" id="projectsLink">Projects</a>
      </li>
    </ul>
  </nav>
  `;
};

//La función que implementa el header
const Header = () => {
  //Recupero la etiqueta header del html
  const header = document.querySelector("header");
  //Le inyecto el string del template al header
  header.innerHTML = template();
};

//Exportamos la función Header
export default Header;
