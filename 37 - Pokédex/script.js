const container = document.querySelector(".container");

for (let i = 1; i <= 151; i++) {
    makeRequest(i);
}

function printPokemon() {
    const pokemon = JSON.parse(this.responseText);
    const type    = pokemon.types[0].type.name;
    const image   = pokemon.sprites.front_default;
    
    container.innerHTML += `<div class="poke ${type}">
        <div class="poke-img">
            <img src="${image}" alt="${pokemon.name}">
        </div>
        <span class="poke-id">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3>${pokemon.name}</h3>
        <small>Type: ${type}</small>
    </div>`
}

function makeRequest(pokemon) {
    const request = new XMLHttpRequest();

    request.onload = printPokemon;
    request.open('get', `https://pokeapi.co/api/v2/pokemon/${pokemon}`, true);
    request.send();
}