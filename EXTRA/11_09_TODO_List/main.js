//TODO
const todos = [
  {
    text: "Limpiar la cocina",
    completed: false,
    id: 1,
  },
  {
    text: "Programar",
    completed: true,
    id: 2,
  },
  {
    text: "Pasear al perro",
    completed: false,
    id: 3,
  },
];

const addTodo = () => {
  //Recuperamos el input
  const textInput = document.querySelector("#textInput");
  //Recuperamos el valor
  const value = textInput.value;
  //Estructuramos el nuevo todo:
  const newTodo = {
    text: value,
    completed: false,
  };
  //Añadimos la nueva tarea al todoList
  todos.push(newTodo);
  //Limpiamos el input
  textInput.value = "";
  //Limpiar la lista antigua del HTML
  const todoList = document.querySelector("#todoList");
  todoList.innerHTML = "";
  //Pintar el nuevo todoList
  renderTodoList();
};

const renderTodoList = () => {
  //Recuperamos el elemento lista donde pintar los todo
  const todoList = document.querySelector("#todoList");
  //Recorremos la tarea
  for (const todo of todos) {
    if (todo.completed) {
      //Li vacio
      const li = document.createElement("li");
      //Creamos la p con la clase completed
      const p = document.createElement("p");
      p.textContent = todo.text;
      p.className = "completed";
      p.addEventListener("click", () => {
        p.classList.toggle("completed");
      });
      //Añadimos la p al li
      li.appendChild(p);
      //Creamos el botón
      const btn = document.createElement("button");
      btn.textContent = "❌";
      //Añadimos el evento al botón
      btn.addEventListener("click", () => {
        li.remove();
        console.log(todo.id)
      });
      //Añadimos el boton al li
      li.appendChild(btn);
      //Añadimos el li a la lista completa
      todoList.appendChild(li);
    } else {
      //Li vacio
      const li = document.createElement("li");
      //Creamos la p
      const p = document.createElement("p");
      p.textContent = todo.text;
      p.addEventListener("click", () => {
        p.classList.toggle("completed");
      });
      //Añadimos la p al li
      li.appendChild(p);
      //Creamos el botón
      const btn = document.createElement("button");
      btn.textContent = "❌";
      //Añadimos el evento al botón
      btn.addEventListener("click", () => {
        li.remove();
        //Vamos a buscar la posicion de elemento en base a su id
        const position = todos.indexOf(todo.id);
        console.log(position)
      });
      //Añadimos el boton al li
      li.appendChild(btn);
      //Añadimos el li a la lista completa
      todoList.appendChild(li);
    }
  }
};

//Añadimos el evento addTodo
document.querySelector("#addBtn").addEventListener("click", addTodo);

renderTodoList();
