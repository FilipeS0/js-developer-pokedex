const params = new URLSearchParams(window.location.search);
const pokemonId = params.get("id");

const details = document.getElementById("details");

window.onload = () => {
    pokeApi.getPokemon(pokemonId).then((pokemon) => {
        const pokeDetails = `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
            <div id="about" class="about">
                <ul>
                    <li>
                        Height: ${pokemon.height}"
                    </li>
                    <li>
                        Weight: ${pokemon.weight}lbs
                    </li>
                    <li>
                        Ability: <span class="to-captilize">${
                            pokemon.ability
                        }</span>
                    </li>
                    <li class="types">
                    Type:
                    ${pokemon.types
                        .map(
                            (type) =>
                                `<span class="type ${type}">${type}</span>`
                        )
                        .join("")}
                </li>
                </ul>
            </div>
        </li>`;
        details.innerHTML = pokeDetails;
    });
};
