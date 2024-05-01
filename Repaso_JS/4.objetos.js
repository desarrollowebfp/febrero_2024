const article = {
  title: "Ordenador",
  price: 1200,
  stock: true,
  description: "Este ordenador es de ultima generación",
  marca: "HP",
  img: "http://image.jpg",
};

console.log(article.title);
console.log(article["title"]);

article.title = "PC";
console.log(article);
article.price += 100;
console.log(article);

article.color = "white";
console.log(article);

delete article.color;
console.log(article)