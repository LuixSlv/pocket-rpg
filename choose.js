function escolherPokemon(pokemon) {
    localStorage.setItem("pokemonEscolhido", pokemon);
    alert(`Você escolheu ${pokemon}!`);
    window.location.href = "battle.html";
}
