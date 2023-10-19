const axios = require("axios");

const url = "https://pokeapi.co/api/v2/pokemon";

axios.get(url)
  .then((respuesta) => {
    let pokemones = respuesta.data.results;
    pokemones.forEach((pokemon) => {
    console.log(pokemon.name)
      console.log('_____');
    });
  })
  .catch(function (error) {
    // Manejar errores aquí
  });
