const data = [
  {
    name: "rock",
    img: "./assets/rock.png",
  },
  {
    name: "paper",
    img: "./assets/paper.png",
  },
  {
    name: "scissors",
    img: "./assets/scissors.png",
  },
];

//Seteamos nuestras variables vacías
let player = "";
let playerChoice = "";
let rivalChoice = "";

//Recuperar el contendor main
const main = document.querySelector("main");

const askName = () => {
  //Vamos a rellenar main con un input y un botón de enviar información
  main.innerHTML = `
  <input type="text" id="username" placeholder="Your name..."/>
  <button id="startBtn">Start</button>
  `;
  //Ahora que existen puedo recuperar los elementos
  const input = document.querySelector("#username");
  const startBtn = document.querySelector("#startBtn");
  //Quiero que al hacer click en el botón me reasigne el valor de la variable player con el valor del input
  startBtn.addEventListener("click", () => {
    if (input.value === "") {
      alert("Inserta un nombre");
      askName();
    } else {
      player = input.value;
      //Y renderizamos el juego
      renderGame();
    }
  });
};

const renderGame = () => {
  //Vaciar el contenedor main para pintar otra cosa
  main.innerHTML = "";
  //Recorro mi data y por cada uno de los items creo un botón
  for (const item of data) {
    const button = document.createElement("button");
    button.innerHTML = `
    <img src="${item.img}" alt="${item.name}"/>
    `;
    //Insertamos en el main los 3 botones
    main.appendChild(button);
    //Dentro del bucle le vamos a dar a cada uno de los botones un evento click que meta en la opción del jugador piedra papel o tijera
    button.addEventListener("click", () => {
      playerChoice = item.name;
      //Y empieza el juego
      startGame();
    });
  }
  //Creamos un h2 con una frase que hable con el usuario
  const h2 = document.createElement("h2");
  h2.textContent = player + ", choose an option...";
  //Lo insertamos en el footer para separarlo de los botones
  const footer = document.querySelector("footer");
  footer.appendChild(h2);
};

const startGame = () => {
  //El ordenador tiene que elegir una opción aleatoria, en vez de indicar un numero en data[?] buscamos un numero aleatorio en base a la longitud de data que no sea decimal
  const randomNumber = Math.floor(Math.random() * data.length);
  const randomChoice = data[randomNumber];
  rivalChoice = randomChoice.name;
  //Con este condicional vemos quien gana o pierde
  if (playerChoice === rivalChoice) {
    alert("DRAW!");
    alert("Player: " + playerChoice + "-" + " Rival:" + rivalChoice);
  } else if (playerChoice === "rock" && rivalChoice === "scissors") {
    alert("PLAYER WINS!");
    alert("Player: " + playerChoice + "-" + " Rival:" + rivalChoice);
  } else if (playerChoice === "paper" && rivalChoice === "rock") {
    alert("PLAYER WINS!");
    alert("Player: " + playerChoice + "-" + " Rival:" + rivalChoice);
  } else if (playerChoice === "scissors" && rivalChoice === "paper") {
    alert("PLAYER WINS!");
    alert("Player: " + playerChoice + "-" + " Rival:" + rivalChoice);
  } else {
    alert("PLAYER LOSE!");
    alert("Player: " + playerChoice + "-" + " Rival:" + rivalChoice);
  }
  //Y reiniciamos el juego
  resetGame();
};

const resetGame = () => {
  alert("Play again!");
  //Reiniciamos las variables
  player = "";
  playerChoice = "";
  rivalChoice = "";
  //Pintamos el juego otra vez
  askName();
  //Vaciamos el footer
  const footer = document.querySelector("footer");
  footer.innerHTML = "";
};

//Ejecutamos la función askName por defecto
askName();
