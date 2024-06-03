const lista1 = [1, 2, 3, 4];
const lista2 = [5, 6, 7, 8];

const listaCompleta = lista1.concat(lista2);
console.log(listaCompleta);

const listaCompletaES6 = [...lista1, ...lista2];
console.log(listaCompletaES6);

const agregar9 = [0, ...listaCompletaES6, 9];
console.log(agregar9);

const parteObjeto1 = {
  nombre: "TV",
  color: "negro",
};

const parteObjeto2 = {
  price: 5000,
  marca: "LG",
};

const objetoCompleto = {...parteObjeto1, ...parteObjeto2};
console.log(objetoCompleto)