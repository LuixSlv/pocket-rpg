document.addEventListener("DOMContentLoaded", () => {
    iniciarBatalha();
});

let jogadorHP = 100;
let inimigoHP = 100;

function iniciarBatalha() {
    let escolhido = localStorage.getItem("pokemonEscolhido");
    let inimigo = escolherRival(escolhido);

    document.getElementById("jogador-nome").innerText = escolhido;
    document.getElementById("jogador-img").src = `sprites/${escolhido.toLowerCase()}.gif`;

    document.getElementById("inimigo-nome").innerText = inimigo;
    document.getElementById("inimigo-img").src = `sprites/${inimigo.toLowerCase()}.gif`;
}

function escolherRival(pokemon) {
    let rival;
    if (pokemon === "Charmander") rival = "Squirtle";
    else if (pokemon === "Squirtle") rival = "Bulbasaur";
    else rival = "Charmander";
    return rival;
}

function atacar() {
    let dano = Math.floor(Math.random() * 20) + 10;
    inimigoHP -= dano;
    document.getElementById("inimigo-hp").innerText = Math.max(0, inimigoHP);

    if (inimigoHP <= 0) {
        alert("Você venceu a batalha!");
        window.location.href = "pallet_town.html";
        return;
    }

    setTimeout(() => ataqueInimigo(), 1000);
}

function ataqueInimigo() {
    let dano = Math.floor(Math.random() * 20) + 10;
    jogadorHP -= dano;
    document.getElementById("jogador-hp").innerText = Math.max(0, jogadorHP);

    if (jogadorHP <= 0) {
        alert("Você perdeu! Voltando ao início...");
        window.location.href = "index.html";
    }
}

function fugir() {
    alert("Você fugiu! Voltando para a cidade.");
    window.location.href = "pallet_town.html";
}
