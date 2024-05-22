import "./style.css";
//Importo Componentes
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";

const create = () => {
  //Lanzo Header
  Header();
  //Lanzo Footer
  Footer();
  //Lanzo AboutMe
  AboutMe();
  //A partir de aqui todo existe en mi html
  //Recupero los links y les añado un evento click que pinten AboutMe y Projects
  document
    .querySelector("#aboutLink")
    .addEventListener("click", () => AboutMe());
    
  document
    .querySelector("#projectsLink")
    .addEventListener("click", () => Projects());
};

//Lo único que ejecutamos aqui es la función create
create();
