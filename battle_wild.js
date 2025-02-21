document.addEventListener("DOMContentLoaded", () => {
    iniciarBatalha();
});

let jogadorHP = 100;
let wildHP = 100;
let pokemons = ["Pidgey", "Rattata", "Caterpie"];
let pokemonSelvagem = pokemons[Math.floor(Math.random() * pokemons.length)];

function iniciarBatalha() {
    let escolhido = localStorage.getItem("pokemonEscolhido");

    document.getElementById("jogador-nome").innerText = escolhido;
    document.getElementById("jogador-img").src = `sprites/${escolhido.toLowerCase()}.gif`;

    document.getElementById("wild-nome").innerText = pokemonSelvagem;
    document.getElementById("wild-img").src = `sprites/${pokemonSelvagem.toLowerCase()}.gif`;
}

function atacar() {
    let dano = Math.floor(Math.random() * 20) + 10;
    wildHP -= dano;
    document.getElementById("wild-hp").innerText = Math.max(0, wildHP);

    if (wildHP <= 0) {
        alert("Você derrotou o Pokémon selvagem!");
        window.location.href = "route1.html";
        return;
    }

    setTimeout(() => ataqueInimigo(), 1000);
}

function ataqueInimigo() {
    let dano = Math.floor(Math.random() * 15) + 5;
    jogadorHP -= dano;
    document.getElementById("jogador-hp").innerText = Math.max(0, jogadorHP);

    if (jogadorHP <= 0) {
        alert("Você perdeu! Voltando para Pallet...");
        window.location.href = "pallet_town.html";
    }
}

function tentarCapturar() {
    let chance = wildHP < 50 ? 0.5 : 0.2;
    if (Math.random() < chance) {
        alert(`Você capturou um ${pokemonSelvagem}!`);
        // Aqui você pode adicionar lógica para salvar o Pokémon na equipe do jogador
        window.location.href = "route1.html";
    } else {
        alert("O Pokémon escapou!");
        ataqueInimigo();
    }
}

function fugir() {
    alert("Você fugiu!");
    window.location.href = "route1.html";
}
