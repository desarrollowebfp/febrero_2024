import "./Header.css";
import links from "../../data/links";

const Header = () => {
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.route;
    a.innerText = link.name;
    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  header.appendChild(nav);
  document.body.appendChild(header);
};

export default Header;
