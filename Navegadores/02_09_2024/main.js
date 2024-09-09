//Recuperar el contenedor main
const main = document.querySelector("main");

//Renderizado por defecto
const printDefault = () => {
  //Añadimos el contenido al main
  main.innerHTML = `
  <h2>Please, log in</h2>
  <input type="text" id="username" placeholder="Username"/>
  <input type="password" id="password" placeholder="Password"/>
  <button id="loginBtn">Login</button>
  `;
  //Añadimos un evento click al botón
  document.querySelector("#loginBtn").addEventListener("click", () => {
    //Recuperamos la info de los inputs
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    //Hacemos la comprobación de la longitud del nombre de ususario y la contraseña capada
    if (username.length > 2 && password === "Prometeo2024") {
      //Guardamos en la memoria del navegador el nombre del usuario
      localStorage.setItem("username", username);
      //Pintamos la pantalla de bienvenida
      printLogged(username);
    } else {
      alert("Identificate con un usuario y contraseña correctas");
      //Vaciamos los campos inputs para que lo vuelva a intentar
      document.querySelector("#username").value = "";
      document.querySelector("#password").value = "";
    }
  });
};

//Renderizado con sesión iniciada
const printLogged = (username) => {
  //Añadimos el contenido html
  main.innerHTML = `
  <h2>Welcome ${username}</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias rem corporis nemo necessitatibus sunt modi, ullam repellendus cum nobis vitae est voluptatum rerum iure possimus, atque optio, illo earum.</p>
  <button id="logoutBtn">Logout</button>
  `;

  //Añadimos el evento click
  document.querySelector("#logoutBtn").addEventListener("click", () => {
    //Borramos de la memoria del navegador la clave username
    localStorage.removeItem("username");
    //Volvemos a renderizar la vista por defecto
    printDefault();
  });
};

//Vamos a añadir un evento a DOMContentLoaded, esto se va a disparar en cuanto cargue la página
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("username")) {
    const username = localStorage.getItem("username");
    printLogged(username);
  } else {
    printDefault();
  }
});
