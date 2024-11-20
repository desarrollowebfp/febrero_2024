import "./style.css";

import dataJSON from "./data/books.json";
const books = dataJSON.library;

//Vamos a pintar los libros disponibles
const printBooks = (books) => {
  //Recupero mi contenedor de libros disponibles
  const availableBooksContainer = document.querySelector("#available_books");
  //Recorro los libros y creo los elementos para cada uno de ellos
  for (const book of books) {
    console.log(book);
    const li = document.createElement("li");
    li.innerHTML = `
      <article>
        <img src="${book.book.cover}" alt="Portada de ${book.book.title}"/>
        <h3>${book.book.title}</h3>
        <h4> ${book.book.author.name}</h4>
        <p>${book.book.genre}</p>
        <p>${book.book.pages} pags.</p>
      </article>
    `;
    availableBooksContainer.appendChild(li);
  }
};

printBooks(books);
