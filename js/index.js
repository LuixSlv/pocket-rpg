function novoJogo() {
    localStorage.clear(); // Limpa saves anteriores
    window.location.href = "intro.html";
}

function continuarJogo() {
    if (localStorage.getItem("saveData")) {
        window.location.href = "game.html";
    } else {
        alert("Nenhum jogo salvo encontrado!");
    }
}

function abrirConfiguracoes() {
    window.location.href = "config.html";
}
