import "./Projects.css";
import projects from "../../data/projects";

const template = () => {
  return `
  <section id="projects">
    
  </section>
  `;
};

const printProjects = () => {
  const container = document.querySelector("#projects");
  for (const project of projects) {
    const article = document.createElement("article");
    article.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.fecha}</p>
    `;
    container.appendChild(article);
  }
};

const Projects = () => {
  document.querySelector("main").innerHTML = template();
  printProjects();
};

export default Projects