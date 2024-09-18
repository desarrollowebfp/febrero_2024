//TODO
let todos = [];

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
  renderTodoList(todos);
  //Guardamos el todos en el localStorage
  localStorage.setItem("todolist", JSON.stringify(todos));
};

const renderTodoList = (list) => {
  //Recuperamos el elemento lista donde pintar los todo
  const todoList = document.querySelector("#todoList");
  //Recorremos la tarea
  for (const todo of list) {
    if (todo.completed) {
      //Li vacio
      const li = document.createElement("li");
      //Creamos la p con la clase completed
      const p = document.createElement("p");
      p.textContent = todo.text;
      p.className = "completed";
      p.addEventListener("click", () => {
        p.classList.toggle("completed");
        const actualPosition = todos.indexOf(todo);
        todos[actualPosition].completed = !todos[actualPosition].completed;
        localStorage.setItem("todolist", JSON.stringify(todos));
      });
      //Añadimos la p al li
      li.appendChild(p);
      //Creamos el botón
      const btn = document.createElement("button");
      btn.textContent = "❌";
      //Añadimos el evento al botón
      btn.addEventListener("click", () => {
        const actualPosition = todos.indexOf(todo);
        console.log(actualPosition);
        todos.splice(actualPosition, 1)
        li.remove();
        localStorage.setItem("todolist", JSON.stringify(todos));
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
        const actualPosition = todos.indexOf(todo);
        todos[actualPosition].completed = !todos[actualPosition].completed;
        localStorage.setItem("todolist", JSON.stringify(todos));
      });
      //Añadimos la p al li
      li.appendChild(p);
      //Creamos el botón
      const btn = document.createElement("button");
      btn.textContent = "❌";
      //Añadimos el evento al botón
      btn.addEventListener("click", () => {
        const actualPosition = todos.indexOf(todo);
        todos.splice(actualPosition, 1)
        li.remove();
        localStorage.setItem("todolist", JSON.stringify(todos));
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

//Vamos a añadir un evento a el documento, para cuando cargue el contenido del DOM compruebe si hay algo en el localStorage, y si lo tiene que lo pinte y si no que pinte un listado por defecto
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("todolist")) {
    const localTodoList = JSON.parse(localStorage.getItem("todolist"));
    renderTodoList(localTodoList);
    todos = localTodoList;
  } else {
    todos = [
      {
        text: "Limpiar la cocina",
        completed: false,
      },
      {
        text: "Programar",
        completed: true,
      },
      {
        text: "Pasear al perro",
        completed: false,
      },
    ];
    renderTodoList(todos);
  }
});
