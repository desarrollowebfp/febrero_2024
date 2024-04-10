const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
const alumnos = ["Lucia", "Abel", "Aitor", "Alejandro", "Jose Manuel", "Luis"];

function findLongestWord(stringList) {
  //Definimos una VARIABLE con el string más corto posible
  let longestWord = "";
  //Recorremos cada palabra del bucle, si esta palabra es más larga que longestWord toma su lugar y si no nada
  for (const word of stringList) {
    //Si la longitud de cada una de las palabras es mayor que la variable longestWord
    if (word.length > longestWord.length) {
      //La sustituye
      longestWord = word;
    }
  }
  //Cuando termine el bucle, enseñamos por consola como ha quedado longestWord
  console.log(longestWord);
}

findLongestWord(avengers);
findLongestWord(alumnos);
