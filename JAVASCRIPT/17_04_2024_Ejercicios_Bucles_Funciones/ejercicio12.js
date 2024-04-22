const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const uniques = [];
  for (const element of list) {
    if (!uniques.includes(element)) {
      uniques.push(element);
    }
  }
  console.log(uniques)
}

removeDuplicates(duplicates);
