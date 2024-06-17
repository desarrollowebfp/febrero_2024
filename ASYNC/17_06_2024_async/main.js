//1º Hago la llamada GET a la URL de los personajes
fetch("https://rickandmortyapi.com/api/character")
  //2º Y entonces esa respuesta con datos crudos la transformamos en json, como es un proceso que tarda, vamos a dejar que trabaje
  .then((res) => res.json())
  //3º Y entonces cuando res esté completamente en json ya podemos trabajar con res completado
  .then((res) => {
    const characters = res.results;
    for (const character of characters) {
      document.body.innerHTML += `
      <h2>${character.name}</h2>
      <h3>${character.species}</h3>
      <img src=${character.image} alt=${character.name}/>
      `
    }
  }).catch((err => {
    document.body.innerHTML = `
    <h2>Ahora mismo la API está en mantenimiento, vuelve más tarde por favor</h2>
    `
  }))