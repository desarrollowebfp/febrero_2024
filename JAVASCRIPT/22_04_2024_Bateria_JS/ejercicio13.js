const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

const alumnos = [
  "Janire",
  "Luis",
  "Alejandro",
  "Jose Manuel",
  "Abel",
  "Fabiana",
  "Nico",
];

function nameFinder(nameList, name) {
  const position = nameList.indexOf(name);
  if (position === -1) {
    console.log(false, "El elemento no está en el array");
  } else {
    console.log(true, position);
  }
}

nameFinder(names, "Jessica");
nameFinder(alumnos, "Fabiana")
nameFinder(alumnos, "Byron");