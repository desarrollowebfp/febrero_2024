import "./Header.css";

const template = () => `
<span>💻</span>
<h1>SPA x JavaScript</h1>
<nav>
  <ul>
    <li>
      <a href="/">Home</a> 
    </li>
    <li>
      <a href="/gallery">Gallery</a> 
    </li>
    <li>
      <a href="/contact">Contact</a> 
    </li>
  </ul>
</nav>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
