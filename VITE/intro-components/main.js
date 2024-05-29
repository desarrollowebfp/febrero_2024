import "./style.css";
import Button from "./components/Button/Button";

const sayHello = () => {
  console.log("Hola")
}

document.querySelector("#app").innerHTML = `
  ${Button("Register", "primary", sayHello)}
  ${Button("Login", "primary")}
  ${Button("Logout", "secondary")}
  ${Button("Info", "tertiary")}
`;
