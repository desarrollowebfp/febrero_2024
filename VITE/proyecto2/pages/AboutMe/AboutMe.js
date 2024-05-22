import "./AboutMe.css";

const template = () => {
  return `
  <section id="aboutme">
  <h2>Mi nombre es Byron y soy un perro</h2>
  <p>BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablabla</p>
  <img src="/Byron.jpg" alt="Imagen de Byron"/>
  </section>
  `;
};

const AboutMe = () => {
  document.querySelector("main").innerHTML = template();
};

export default AboutMe;
