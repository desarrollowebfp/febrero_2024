import "./Gallery.css";

const template = () => `
<section class="gallery">
  <h2>Gallery</h2>
  <ul class="gallery-container">
  </ul>
</section>
`;

const listeners = async () => {
  const container = document.querySelector(".gallery-container");
  const data = await fetch("https://picsum.photos/v2/list/?page=3");
  const dataJSON = await data.json();
  for (const image of dataJSON) {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${image.download_url}" alt="Random image by: ${image.author}"/>`;
    container.appendChild(li);
  }
};

const Gallery = () => {
  document.querySelector("main").innerHTML = template();
  listeners();
};

export default Gallery;
