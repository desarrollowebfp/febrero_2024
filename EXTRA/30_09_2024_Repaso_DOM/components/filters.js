import "./filters.css";

const template = () => `
    <h2>CSS Filters</h2>
    <img src="/porg.png" alt="Porg" id="filter-image"/>
    <div id="filtersBtn">
        <button id="blur">Blur</button>
        <button id="huerotate">Hue Rotate</button>
        <button id="saturate">Saturate</button>
        <button id="sepia">Sepia</button>
        <button id="opacity">Opacity</button>
        <button id="dropshadow">Drop Shadow</button>
        <button id="invert">Invert</button>
        <button id="mix">Mix</button>
        <button>Reset</button>
    </div>
`;

const listeners = () => {
  //Recupero la imagen
  const image = document.querySelector("#filter-image");
  //Recuperamos los botones
  const buttons = document.querySelectorAll("#filtersBtn > button");
  //Recorremos los botones y añadirle un evento en bucle
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      image.className = btn.id
    })
  })
}


const Filters = () => {
  document.querySelector("#filters").innerHTML = template();
  listeners();

}

export default Filters