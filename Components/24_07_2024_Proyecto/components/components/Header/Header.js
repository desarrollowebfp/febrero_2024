import "./Header.css";
import data from "../../data/data";
const { title, logo, links } = data;
/* const title = data.title;
const logo = data.logo;
const links = data.links; */

const Header = () => {
  return `
  <header>
    <img src="${logo}" alt="${title} logo"/>
    <h1>${title}</h1>
    <nav>
      <ul>
        ${links.map((link) => `
        <li>
          <a href="${link.where}">${link.name}</a>
        </li>
        `).join("")}
      </ul>
    </nav>
  </header>
  `
}

export default Header