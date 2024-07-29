import "./Header.css";
//Importamos data
import data from "../../data/data.js";
//Le hacemos destructuring de las partes que queremos de data
const { hero, hero_alt, title, subtitle } = data;

//Creamos un componente que haga uso de esos datos
const Header = () => `
<header>
  <img src="${hero}" alt="${hero_alt}" />
  <h1>${title}</h1>
  <h2>${subtitle}</h2>
</header>
`;

//Lo exportamos
export default Header;
