import "./Footer.css";

const template = () => `
<p>Copyright - Prometeo - 2024</p>
`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
