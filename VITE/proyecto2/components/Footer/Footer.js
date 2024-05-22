import "./Footer.css";

const template = () => {
  return `
  <p>Copyright 2024 - Byron</p>
  `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
