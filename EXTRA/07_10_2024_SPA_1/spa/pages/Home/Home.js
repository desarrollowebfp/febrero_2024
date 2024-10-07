import "./Home.css";

const template = () => `
<section class="home">
  <h2>Home</h2>
</section>
`;

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
