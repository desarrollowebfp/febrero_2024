for (let i = 0; i < 5; i++) {
  console.log(i);
}

const list = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto"];

for (let i = 0; i < list.length; i++) {
  const element = list[i];
  console.log(element);
}

const numeros = [1, 2, 3, 4, 5, 6];
const numerosDobles = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  numerosDobles.push(numero * 2);
}

console.log(numerosDobles);

//

const listado = ["A", "B", "C", "D"];

for (let i = 0; i < listado.length; i++) {
  const elemento = listado[i];
  console.log(elemento);
}

for (const elemento of listado) {
  console.log(elemento);
}

listado.forEach((elemento, i) => {
  console.log(elemento, i);
});

const objeto = {
  name: "Objeto",
  price: 50,
  color: "Amarillo",
  status: true,
};

for (const clave in objeto) {
  console.log(clave);
  console.log(objeto["color"]);
}
