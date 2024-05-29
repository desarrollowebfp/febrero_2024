import "./Button.css";


/* const Button = (text, variant = "primary") => {
  const template = `
  <button class="btn ${variant}">${text}</button>
  `;
  return template;
}; */

const Button = (text, variant = "primary", action) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.className = `btn ${variant}`;
  button.addEventListener("click", () => {
    action()
  })
  return button.outerHTML;
};

export default Button;
