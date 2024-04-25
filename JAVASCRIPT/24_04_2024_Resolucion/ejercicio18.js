const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const result = [];

for (let i = 0; i < placesToTravel.length; i++) {
  const place = placesToTravel[i];
  if (place.id !== 11 && place.id !== 40) {
    result.push(place);
  }
}

console.log(result);

for (let i = 0; i < placesToTravel.length; i++) {
  const place = placesToTravel[i];
  if (place.id === 11 || place.id === 40) {
    const position = placesToTravel.indexOf(place);
    console.log(position)
    placesToTravel.splice(position, 1);
  }
}

console.log(placesToTravel)