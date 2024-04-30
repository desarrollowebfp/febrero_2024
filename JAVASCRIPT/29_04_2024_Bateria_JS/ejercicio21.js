const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const user of users) {
  if(user.years >= 18){
    console.log("Usuario mayor de edad: " + user.name)
  } else{
    console.log("Usuario menor de edad: " + user.name)
  }
}