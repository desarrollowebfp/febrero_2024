import "./Footer.css";

const template = () => `
<p>Copyright 2024 - Pinterest</p>
`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
