import "./style.css";

//Este evento se va a lanzar siempre y cuando cargue el contenido de DOM en el documento, es decir, cuando cargue la pagina.
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

document.querySelector("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.querySelector("#themeBtn").textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("#themeBtn").textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

const animales = ["perro", "gato", "pato"];

document.querySelector("#saveBtn").addEventListener("click", () => {
  localStorage.setItem("user", JSON.stringify(animales));
});

document.querySelector("#readBtn").addEventListener("click", () => {
  console.log(JSON.parse(localStorage.getItem("user")));
});
/*
document.querySelector("#deleteBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
});

sessionStorage */
