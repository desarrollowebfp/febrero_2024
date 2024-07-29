import "./Main.css";

const template = () => `
<ul id="gallery"></ul>
`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
