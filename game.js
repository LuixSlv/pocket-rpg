document.addEventListener("DOMContentLoaded", () => {
    verificarSave();
});

function verificarSave() {
    let save = localStorage.getItem("pokemonSave");
    if (save) {
        document.getElementById("continuar-btn").style.display = "block";
    } else {
        document.getElementById("continuar-btn").style.display = "none";
    }
}

function novoJogo() {
    localStorage.removeItem("pokemonSave");
    window.location.href = "choose.html";
}

function continuarJogo() {
    window.location.href = "pallet_town.html";
}

function abrirConfiguracoes() {
    window.location.href = "config.html";
}
