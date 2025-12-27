const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id");

const details = document.getElementById("details");

window.onload = () => {
    pokeApi.getPokemon(pokemonId);
    // pokeApi
    //     .getPokemons(pokemonId)
    //     .then(() => {})
    //     .then(() => {
    //         const pokeDetails = `<li class="pokemon ${pokemon.type}">
    //         <span class="number">#${pokemon.number}</span>
    //         <span class="name">${pokemon.name}</span>

    //         <div class="detail">
    //             <ol class="types">
    //             ${pokemon.types
    //                 .map((type) => `<li class="type ${type}">${type}</li>`)
    //                 .join("")}
    //             </ol>

    //             <img src="${pokemon.photo}"
    //             alt="${pokemon.name}">
    //         </div>

    //             <div id="about">
    //             <ul>
    //             <li>
    //             </li>
    //             </ul>
    //             </div>
    //             </li>`;

    //         details.innerHTML = pokeDetails;
    //     });
};
