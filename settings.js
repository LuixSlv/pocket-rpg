document.addEventListener("DOMContentLoaded", carregarConfiguracoes);

function carregarConfiguracoes() {
    let config = JSON.parse(localStorage.getItem("config")) || { som: true, idioma: "pt" };
    
    document.getElementById("som").checked = config.som;
    document.getElementById("idioma").value = config.idioma;
}

function toggleSom() {
    let config = JSON.parse(localStorage.getItem("config")) || { som: true, idioma: "pt" };
    config.som = document.getElementById("som").checked;
    localStorage.setItem("config", JSON.stringify(config));
}

function mudarIdioma() {
    let config = JSON.parse(localStorage.getItem("config")) || { som: true, idioma: "pt" };
    config.idioma = document.getElementById("idioma").value;
    localStorage.setItem("config", JSON.stringify(config));
}

function voltar() {
    window.location.href = "pallet_town.html";
}
