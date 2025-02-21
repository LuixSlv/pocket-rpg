let passos = 0;

function caminhar() {
    passos++;
    document.getElementById("status").innerText = `Você deu ${passos} passos...`;

    if (Math.random() < 0.3) {
        encontrarPokemon();
    } else if (Math.random() < 0.1) {
        encontrarNPC();
    }

    if (passos >= 10) {
        alert("Você chegou à próxima cidade!");
        window.location.href = "next_city.html";
    }
}

function gramaAlta() {
    if (Math.random() < 0.6) {
        encontrarPokemon();
    } else if (Math.random() < 0.2) {
        encontrarItem();
    }
}

function encontrarPokemon() {
    alert("Um Pokémon selvagem apareceu!");
    window.location.href = "battle_wild.html";
}

function encontrarNPC() {
    alert("Você encontrou um treinador!");
    window.location.href = "battle_npc.html";
}

function encontrarItem() {
    alert("Você encontrou uma poção!");
    // Aqui você pode adicionar lógica para salvar o item na mochila
}

function voltar() {
    window.location.href = "pallet_town.html";
}
