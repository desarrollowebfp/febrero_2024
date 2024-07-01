import "./Header.css";

const template = () => `
<h1>Pinterest</h1>
<input type="text" id="searchInput" placeholder="Ex: Dogs" />
<button id="searchBtn">Search</button>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
