import "./Main.css";

const template = () => `
  <h2 id="message"></h2>
  <ul id="results"></ul>
`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
