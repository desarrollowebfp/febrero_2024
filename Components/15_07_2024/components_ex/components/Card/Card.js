import "./Card.css";

const Card = (
  info = {
    type: "expanded",
    title: "Unknown",
    cover: "http:placeholder.jpg",
    artist: "X",
  }
) => {
  if (info.type === "expanded") {
    return `
    <article class="card expanded">
      <img src="${info.cover}" alt="" />
      <h3>${info.title}</h3>
      <p>${info.artist}</p>
    </article>
    `;
  } else {
    return `
    <article class="card minimal">
      <img src="${info.cover}" alt="" />
      <h3>${info.title}</h3>
    </article>
    `;
  }
};

export default Card;
