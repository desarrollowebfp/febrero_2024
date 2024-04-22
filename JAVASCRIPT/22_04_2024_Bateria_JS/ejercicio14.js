const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  const result = {};
  for (const element of list) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  console.log(result);
}

repeatCounter(words);

//RESULTADO A CAMARA LENTA
/* const result = {}
result["code"] = 1;
result["repeat"] = 1;
result["eat"] = 1;
result["sleep"] = 1;
result["code"] += 1;
result["enjoy"] = 1;
result["sleep"] += 1;
result["code"] += 1;
result["enjoy"] += 1;
result["sleep"] += 1;
result["code"] += 1;

console.log(result) */