//&& -> AND
//|| -> OR
//! -> NOT
//== -> IGUAL QUE
//=== -> ESTRICTAMENTE IGUAL QUE

const limpiarHabitacion = false;
const estudiar = false;

if (limpiarHabitacion && estudiar) {
  console.log("Puedes salir a jugar");
} else if (limpiarHabitacion || estudiar) {
  console.log("Puedes jugar pero dentro de casa");
} else {
  console.log("No puedes jugar");
}

//

const edad = 56;

if (edad < 0) {
  console.log("No has nacido");
} else if (edad >= 0 && edad < 5) {
  console.log("Eres un bebe");
} else if (edad >= 5 && edad <= 13) {
  console.log("Eres un niño/niña");
} else if (edad > 13 && edad <= 29) {
  console.log("Eres adolescente");
} else if (edad >= 30 && edad < 70) {
  console.log("Eres adulto");
} else if (edad >= 70 && edad < 120) {
  console.log("Eres una persona mayor");
} else {
  console.log("Eres inmortal");
}

const numero = "10";

if (numero === 10) {
  console.log("Todo guay, se cumple");
} else {
  console.log("No se cumple");
}

//TERNARIO
numero === 10
  ? console.log("Todo guay, se cumple")
  : console.log("No se cumple");
