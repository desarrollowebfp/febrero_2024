const temaBtn = document.querySelector("#temaBtn");

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const discos = [
  {
    title: "De Mysteriis Dom Sathanas",
    cover:
      "https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw9e4ebf5f/images/4/4/5/2/445249.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
    artist: "Mayhem",
    year: 1994,
  },
  {
    title: "In the Nightside Eclipse",
    cover:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/02/Emperor_InTheNightsideEclipse.jpg",
    artist: "Emperor",
    year: 1994,
  },
  {
    title: "Transilvanian Hunger",
    cover:
      "https://m.media-amazon.com/images/I/611O1Xoo2ML._UF894,1000_QL80_.jpg",
    artist: "Darkthrone",
    year: 1994,
  },
  {
    title: "Hvis lyset tar oss",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Hvis_lyset_tar_oss.jpg",
    artist: "Burzum",
    year: 1994,
  },
  {
    title: "Filosofem",
    cover: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Filosofem.jpg",
    artist: "Burzum",
    year: 1996,
  },
  {
    title: "Andy y Lucas",
    cover: "https://m.media-amazon.com/images/I/71HeyBVo-uL._UF894,1000_QL80_.jpg",
    artist: "Andy y Lucas",
    year: 1345,
  },
  {
    title: "De Mysteriis Dom Sathanas",
    cover:
      "https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw9e4ebf5f/images/4/4/5/2/445249.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
    artist: "Mayhem",
    year: 1994,
  },
  {
    title: "In the Nightside Eclipse",
    cover:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/02/Emperor_InTheNightsideEclipse.jpg",
    artist: "Emperor",
    year: 1994,
  },
  {
    title: "Transilvanian Hunger",
    cover:
      "https://m.media-amazon.com/images/I/611O1Xoo2ML._UF894,1000_QL80_.jpg",
    artist: "Darkthrone",
    year: 1994,
  },
  {
    title: "Hvis lyset tar oss",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Hvis_lyset_tar_oss.jpg",
    artist: "Burzum",
    year: 1994,
  },
  {
    title: "Filosofem",
    cover: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Filosofem.jpg",
    artist: "Burzum",
    year: 1996,
  },
  {
    title: "Andy y Lucas",
    cover: "https://m.media-amazon.com/images/I/71HeyBVo-uL._UF894,1000_QL80_.jpg",
    artist: "Andy y Lucas",
    year: 1345,
  },
  {
    title: "De Mysteriis Dom Sathanas",
    cover:
      "https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw9e4ebf5f/images/4/4/5/2/445249.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
    artist: "Mayhem",
    year: 1994,
  },
  {
    title: "In the Nightside Eclipse",
    cover:
      "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2019/02/Emperor_InTheNightsideEclipse.jpg",
    artist: "Emperor",
    year: 1994,
  },
  {
    title: "Transilvanian Hunger",
    cover:
      "https://m.media-amazon.com/images/I/611O1Xoo2ML._UF894,1000_QL80_.jpg",
    artist: "Darkthrone",
    year: 1994,
  },
  {
    title: "Hvis lyset tar oss",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Hvis_lyset_tar_oss.jpg",
    artist: "Burzum",
    year: 1994,
  },
  {
    title: "Filosofem",
    cover: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Filosofem.jpg",
    artist: "Burzum",
    year: 1996,
  },
  {
    title: "Andy y Lucas",
    cover: "https://m.media-amazon.com/images/I/71HeyBVo-uL._UF894,1000_QL80_.jpg",
    artist: "Andy y Lucas",
    year: 1345,
  }
];

discos.pop();

const musicSection = document.querySelector("#musicSection");

//Por cada uno de los discos...
for (const disco of discos) {
  //Creamos un article vacio
  const article = document.createElement("article");
  //Creamos un h2
  const h2 = document.createElement("h2");
  //Le damos texto al h2
  h2.textContent = disco.title;
  //Y lo metemos en el articulo
  article.appendChild(h2);
  //Creamos una p
  const p = document.createElement("p");
  //Le damos contenido al parrafo juntando el artista con el año
  p.textContent = disco.artist + " - " + disco.year;
  //Y lo metemos en el articulo
  article.appendChild(p);
  console.log(article);
  //Creamos una imagen vacia
  const image = document.createElement("img");
  image.src = disco.cover;
  image.alt = disco.title;
  //Y lo metemos en el articulo
  article.appendChild(image);
  //Cada uno de estos articulos lo metemos en la seccion que recuperamos antes del bucle
  musicSection.appendChild(article)
}

const h3 = document.querySelector("#recuento");
h3.textContent = "Total de discos: " + discos.length;