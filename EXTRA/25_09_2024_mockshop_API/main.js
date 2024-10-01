//Este es el ul donde vamos a pintar los productos
const container = document.querySelector("#products");
//Vamos a recuperar el h2
const h2 = document.querySelector("#h2");

//Vamos a hacer la llamada a la API
const getProducts = async () => {
  //Antes de la llamada ponemos que el h2 esta cargando
  h2.textContent = "Loading...";

  const data = await fetch(
    "https://mock.shop/api?query={products(first:%2040){edges%20{node%20{title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
  );
  const dataJSON = await data.json();
  mapProducts(dataJSON.data.products.edges)
  //Ya que ha terminado la llamada a la API le ponemos el texto final
  h2.textContent = "Featured products";
};
//Vamos a mapear para normalizar los datos y limpiarlos en una estructura un poco más sencilla
const mapProducts = (products) => {
  const mappedProducts = products.map((product) => ({
    name: product.node.title,
    description: product.node.description,
    image: product.node.images.edges[0].node.url,
    price: product.node.variants.edges[0].node.price.amount
  }))

  console.log(mappedProducts)
  renderProducts(mappedProducts)
};
//Los pintaremos
const renderProducts = (products) => {
  for (const product of products) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p class="description">${product.description}</p>
    <p>${product.price}€</p>
    `
    container.appendChild(li)
  }
};

//La única función que disparamos por defecto es getProducts porque encadena con las otras dos
getProducts();
