const API_KEY = "69902c6c30a342d6b7e163258241906";

//Ejecutamos la busqueda con un fetch, insertamos nuestra api key interpolando y por argumento le pasaremos la ciudad para poder cambiarla
const getWeatherInfo = (city) => {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  )
    .then((res) => res.json())
    .then((res) => printData(res));
};

//Pintamos el data recuperado del fetch y si hay un error pintamos el error que nos da la API
const printData = (data) => {
  if (data.error) {
    document.querySelector("main").innerHTML = `
     <h2>${data.error.message}</h2>
     `;
  } else {
    document.querySelector("main").innerHTML = `
  <h2>${data.location.name} - ${data.location.country}</h2>
  <img src="${data.current.condition.icon}" alt="Weather icon" />
  <h3>${data.current.temp_c}º</h3>
  <h4>${data.current.condition.text}</h4>
  <h4>Hum: ${data.current.humidity}%</h4>
  `;
  }
};

//Le añadimos un evento click al botón de busqueda
document.querySelector("#searchBtn").addEventListener("click", () => {
  //Recuperamos el valor del input
  const cityValue = document.querySelector("#cityInput").value;
  //Ejecutamos la busqueda por el nombre de la ciudad
  getWeatherInfo(cityValue);
  //Vaciamos el input
  document.querySelector("#cityInput").value = "";
});

//Ejecuto por defecto con Madrid
getWeatherInfo("Madrid");
