//Info social
const redesSociales = [
  {
    logo: "./assets/icons/twitter.png",
    name: "Twitter",
    link: "http://twitter.com/minombre",
  },
  {
    logo: "./assets/icons/facebook.png",
    name: "Facebook",
    link: "http://facebook.com/minombre",
  },
  {
    logo: "./assets/icons/spotify.png",
    name: "Spotify",
    link: "http://spotify.com/minombre",
  },
];

//Recupero el contenedor
const socialContainer = document.querySelector("#social");

//Recorremos las redes sociales
for (const red of redesSociales) {
  const li = document.createElement("li");
  li.innerHTML = `
  <a href="${red.link}" target="_blank">
    <img src="${red.logo}" alt="${red.name}"  />
  </a>
  `;
  /*  const a = document.createElement("a");
  a.href = red.link;
  const img = document.createElement("img");
  img.src = red.logo;
  img.alt = red.name;
  a.appendChild(img);
  li.appendChild(a); */
  //Al final del todo le inyectamos cada uno de los li's al contenedor
  socialContainer.appendChild(li);
}

//

const viewBtn = document.querySelector("#view");
viewBtn.addEventListener("click", () => {
  //Recupero la galeria
  const gallery = document.querySelector(".gallery");
  gallery.classList.toggle("list");
  if(gallery.classList.contains("list")){
    viewBtn.textContent = "⊞"
  } else{
    viewBtn.textContent = "≡"
  }
})