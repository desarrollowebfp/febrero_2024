const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  //Inicializamos un contador en 0
  let contador = 0;
  //Recorremos la totalidad de numberList con un forof (numberList en un futuro será el array de numbers cuando se lo pasemos por argumentos). El elemento de cada bucle se llamará number.
  for (const number of numberList) {
    //En cada vuelta, reasignamos el valor de contador con lo que sea el contador + el numero de esa vuelta
    contador += number;
  }

  //Cuando termine el bucle, consultamos como ha quedado el contador
  console.log(contador);
}

//Ejecutamos la función sumNumbers con el argumento numbers
sumNumbers(numbers);
