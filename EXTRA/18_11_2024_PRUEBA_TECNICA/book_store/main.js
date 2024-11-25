import "./style.css";

import dataJSON from "./data/books.json";
const books = dataJSON.library;

let pendingBooksList = [];

// Recuperar la lista de libros pendientes desde localStorage
const loadPendingBooks = () => {
  const storedBooks = localStorage.getItem("pendingBooksList");
  return storedBooks ? JSON.parse(storedBooks) : [];
};

// Guardar la lista de libros pendientes en localStorage
const savePendingBooks = (books) => {
  localStorage.setItem("pendingBooksList", JSON.stringify(books));
};

// Inicializamos la lista de libros pendientes desde localStorage
pendingBooksList = loadPendingBooks();

// Función para pintar los libros disponibles o pendientes
const printBooks = (books, containerTag) => {
  // Recupero mi contenedor de libros disponibles
  const container = document.querySelector(containerTag);
  // Vaciamos el contenedor en cada repintado para no repetir nada
  container.innerHTML = "";

  // Si la lista está vacía y es la lista de pendientes, mostramos un mensaje
  if (books.length === 0 && containerTag === "#pending_books") {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No hay libros pendientes.";
    emptyMessage.style.fontStyle = "italic";
    emptyMessage.style.color = "gray";
    container.appendChild(emptyMessage);
    return;
  }

  // Recorro los libros y creo los elementos para cada uno de ellos
  for (const book of books) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const button = document.createElement("button");

    h3.textContent = book.book.title;
    img.src = book.book.cover;
    img.alt = book.book.title;

    // Si estamos en libros disponibles
    if (containerTag === "#available_books") {
      // Verificamos si el libro ya está en pendientes
      const isInPending = pendingBooksList.some(
        (b) => b.book.title.toLowerCase() === book.book.title.toLowerCase()
      );

      button.textContent = "+";
      button.disabled = isInPending; // Deshabilitamos el botón si ya está en pendientes
      button.addEventListener("click", () => {
        if (!isInPending) {
          addBook(book);
        }
      });
    } else {
      // En libros pendientes, mostramos botón "Eliminar"
      button.textContent = "Eliminar";
      button.addEventListener("click", () => {
        removeBook(book);
      });
    }

    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(button);
    container.appendChild(li);
  }
};

// Función que añade un libro pendiente a la lista si no está duplicado
const addBook = (book) => {
  /* const exists = pendingBooksList.some(
    (b) => b.book.title.toLowerCase() === book.book.title.toLowerCase()
  );
  if (exists) {
    alert("Este libro ya está en la lista de pendientes.");
    return;
  } */
  pendingBooksList.push(book);
  savePendingBooks(pendingBooksList);
  printBooks(pendingBooksList, "#pending_books");
  printBooks(books, "#available_books"); // Actualizamos también la lista de disponibles
};

// Función para eliminar un libro de la lista de pendientes
const removeBook = (book) => {
  pendingBooksList = pendingBooksList.filter(
    (b) => b.book.title.toLowerCase() !== book.book.title.toLowerCase()
  );
  savePendingBooks(pendingBooksList);
  printBooks(pendingBooksList, "#pending_books");
  printBooks(books, "#available_books"); // Actualizamos también la lista de disponibles
};

// Pintamos los libros disponibles y los pendientes al cargar la página
printBooks(books, "#available_books");
printBooks(pendingBooksList, "#pending_books");

window.addEventListener("storage", () => {
  // Inicializamos la lista de libros pendientes desde localStorage
  pendingBooksList = loadPendingBooks();
  printBooks(books, "#available_books");
  printBooks(pendingBooksList, "#pending_books");
});
