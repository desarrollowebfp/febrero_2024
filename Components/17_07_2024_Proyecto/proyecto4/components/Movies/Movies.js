import "./Movies.css";
import data from "../../data/data";
const { movies } = data;

const Movies = () => `
  <section id="movies">
    <ul>
    ${movies.map((movie) => `
    <li>
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
      <p>${movie.creator}</p>
      <p>${movie.platform}</p>
      <img src="${movie.cover}" alt="${movie.title}"/>
    </li>
    `).join("")}
    </ul>
  </section>
`;

export default Movies;
