import "./style.css";
//Importamos createAPI de la libreria que hemos instalado
import { createApi } from "unsplash-js";

//Creamos un objeto llamado unsplash usando el metodo createAPI y pasandole nuestra accessKey
const unsplash = createApi({
  accessKey: "L2oY7wcj9Ed4aAKV8qXxpoX7qC_bKRZk3xnfmMh3n4A",
});

unsplash.search
  .getPhotos({
    query: "cat",
    page: 1,
    perPage: 10,
    orientation: "squarish",
  })
  .then((result) => {
    const photos = result.response.results;
    console.log(photos);
  });

//

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

document.querySelector("#confettiBtn").addEventListener("click", () => {
  jsConfetti.addConfetti({
    emojis: ["💀", "🚧", "🧑🏼‍🚀", "💾", "👽", "💻"],
    emojiSize: 100,
    confettiNumber: 10,
  });
});
