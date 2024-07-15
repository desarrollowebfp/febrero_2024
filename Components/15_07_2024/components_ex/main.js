import "./style.css";
import Card from "./components/Card/Card";

const albums = [
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg",
    title: "Master of Puppets",
    artist: "Metallica",
  },
  {
    cover:
      "https://m.media-amazon.com/images/I/81wajmBj+6L.jpg",
    title: "The Number of the Beast",
    artist: "Iron Maiden",
  },
  {
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYtP8y94Xt-S3J7xSGpwM_G3wT9Rev1vb8A&s",
    title: "Paranoid",
    artist: "Black Sabbath",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Slayer_Reign_in_Blood.jpg",
    title: "Reign in Blood",
    artist: "Slayer",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Slipknot_-_Slipknot2.jpg",
    title: "Slipknot",
    artist: "Slipknot",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/6/60/Pantera_-_Vulgar_Display_of_Power.jpg",
    title: "Vulgar Display of Power",
    artist: "Pantera",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Death_-_Symbolic.jpg",
    title: "Symbolic",
    artist: "Death",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Megadeth-RustInPeace.jpg",
    title: "Rust in Peace",
    artist: "Megadeth",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/Judas_Priest_-_Painkiller.jpg",
    title: "Painkiller",
    artist: "Judas Priest",
  },
  {
    cover: "https://upload.wikimedia.org/wikipedia/en/c/cd/DioHolyDiver.jpg",
    title: "Holy Diver",
    artist: "Dio",
  },
];

const container = document.querySelector("#app");

for (const album of albums) {
  container.innerHTML += `
  ${Card({
    type: "minimal",
    cover: album.cover,
    title: album.title,
    artist: album.artist,
  })}
  `;
}

/* document.querySelector("#app").innerHTML = `
${Card({
  type: "expanded",
  cover:
    "https://lastfm.freetls.fastly.net/i/u/500x500/0be3075e1dc23fefc736eabe52454831.jpg",
  title: "POST HUMAN: Nex Gen",
  artist: "Bring me the Horizon",
})}
${Card({
  type: "expanded",
  cover:
    "https://lastfm.freetls.fastly.net/i/u/500x500/0428795b6f6d10cc11e93d918728a4ed.jpg",
  title: "Laugh Tracks",
  artist: "Knocked Loose",
})}
${Card({
  type: "minimal",
  cover:
    "https://lastfm.freetls.fastly.net/i/u/770x0/1ed373120102f0cf4076538c4a3e689d.jpg#1ed373120102f0cf4076538c4a3e689d",
  title: "Burning Throne",
})}
  ${Card({
    type: "minimal",
    cover:
      "https://lastfm.freetls.fastly.net/i/u/500x500/0be3075e1dc23fefc736eabe52454831.jpg",
    title: "POST HUMAN: Nex Gen",
  })}
    ${Card({
      type: "expanded",
      cover:
        "https://lastfm.freetls.fastly.net/i/u/500x500/0428795b6f6d10cc11e93d918728a4ed.jpg",
      title: "Laugh Tracks",
      artist: "Knocked Loose",
    })}
`;
 */
