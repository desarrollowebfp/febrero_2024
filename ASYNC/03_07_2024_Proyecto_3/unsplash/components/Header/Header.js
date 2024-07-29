import "./Header.css";

const template = () => `
<h1>Unsplash</h1>
<input type="text" id="searchInput" placeholder="Dogs" />
<select id="countInput">
  <option value="10">10</option>
  <option value="15">15</option>
  <option value="20">20</option>
</select>
<button id="searchBtn">Search</button>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
