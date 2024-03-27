//SCOPE GLOBAL
const x = 10;

if (x) {
  //SCOPE LOCAL
  const y = 5;
  console.log(y);
  console.log(x);
}
console.log(x);
//NO console.log(y);
