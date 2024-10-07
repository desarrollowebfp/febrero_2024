import "./Header.css";

const template = () => `
<span>💻</span>
<h1>SPA x JavaScript</h1>
<nav>
  <ul>
    <li>
      <a href="#null" id="homeLink">Home</a> 
    </li>
    <li>
      <a href="#null" id="galleryLink">Gallery</a> 
    </li>
    <li>
      <a href="#null" id="contactLink">Contact</a> 
    </li>
  </ul>
</nav>
`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
