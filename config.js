document.addEventListener("DOMContentLoaded", () => {
    carregarConfiguracoes();
});

function carregarConfiguracoes() {
    let som = localStorage.getItem("config_som") === "true";
    let idioma = localStorage.getItem("config_idioma") || "pt";

    document.getElementById("som-checkbox").checked = som;
    document.getElementById("idioma-select").value = idioma;
}

function salvarConfiguracoes() {
    let som = document.getElementById("som-checkbox").checked;
    let idioma = document.getElementById("idioma-select").value;

    localStorage.setItem("config_som", som);
    localStorage.setItem("config_idioma", idioma);

    alert("Configurações salvas!");
}

function voltar() {
    window.location.href = "index.html";
}
