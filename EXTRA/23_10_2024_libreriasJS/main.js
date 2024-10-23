import "./style.css";
import Typed from "typed.js";
import { Howl, Howler } from "howler";

/* const typed = new Typed("#element", {
  strings: [
    "Esta es la <strong>primera</strong> frase.",
    "Y esta es la segunda",
  ],
  typeSpeed: 50,
}); */

var sound = new Howl({
  src: ["cancion.mp3"],
  autoplay: false,
  loop: true,
  volume: 0.5,
  onend: function () {
    console.log("Finished!");
  },
});

document.querySelector("#playbtn").addEventListener("click", () => {
  sound.play();
});

document.querySelector("#pausebtn").addEventListener("click", () => {
  sound.pause();
});

document.querySelector("#stopbtn").addEventListener("click", () => {
  sound.stop();
});
