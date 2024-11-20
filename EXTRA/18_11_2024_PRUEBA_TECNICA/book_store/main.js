import "./style.css";

import dataJSON from "./data/books.json";
const books = dataJSON.library;

let pendingBooksList = [];

//Vamos a pintar los libros disponibles
const printBooks = (books, containerTag) => {
  //Recupero mi contenedor de libros disponibles
  const container = document.querySelector(containerTag);
  //Vaciamos el contenedor en cada repintado para no repetir nada
  container.innerHTML = "";
  //Recorro los libros y creo los elementos para cada uno de ellos
  for (const book of books) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const button = document.createElement("button");
    h3.textContent = book.book.title;
    img.src = book.book.cover;
    img.alt = book.book.title;
    button.textContent = "+";
    button.addEventListener("click", () => {
      addBook(book);
    });
    li.appendChild(h3);
    li.appendChild(img);
    li.appendChild(button);
    container.appendChild(li);
  }
};

//Funcion que añade un libro pendiente a la lista
const addBook = (book) => {
  pendingBooksList.push(book);
  printBooks(pendingBooksList, "#pending_books");
};

printBooks(books, "#available_books");
