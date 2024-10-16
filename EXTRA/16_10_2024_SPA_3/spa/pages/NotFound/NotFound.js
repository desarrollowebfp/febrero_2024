import "./NotFound.css";

const template = () => `
<section class="notfound">
  <h2>Not Found</h2>
</section>
`;

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;
