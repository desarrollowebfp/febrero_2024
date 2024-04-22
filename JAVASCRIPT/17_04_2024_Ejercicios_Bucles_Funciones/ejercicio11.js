const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

const otraListaRara = ["Patata", 12, 1, "Perro", "Botella", 67];

function averageWord(list) {
  //Inicializamos un contador en 0 para acumular el total de numeros tanto numericos como el conteo de letras
  let counter = 0;
  //Recorremos los elementos de la lista
  for (const element of list) {
    //Con el operador typeof podemos comprobar si un dato es de x tipo u otro
    if (typeof element === "string") {
      counter += element.length;
    } else {
      counter += element;
    }
  }

  const average = counter / list.length;
  console.log(average);
}

//Ejecutamos la función y le pasamos como argumento list la lista de elementos aleatorios
averageWord(mixedElements);
averageWord(otraListaRara);
