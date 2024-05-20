//Importamos los estilos globales
import "./style.css";
//Importamos movies
import movies from "./data/movies";
//Importamos shows
import { shows, shows2 } from "./data/shows";
//Importo la funcion
import printElements from "./functions/printElements";

printElements(movies);
printElements(shows);
printElements(shows2);
