document.addEventListener("DOMContentLoaded", carregarPerfil);

function carregarPerfil() {
    let jogador = JSON.parse(localStorage.getItem("jogador")) || { nome: "Treinador", insignias: 0, dinheiro: 3000 };
    
    document.getElementById("nome").innerText = jogador.nome;
    document.getElementById("insignias").innerText = jogador.insignias;
    document.getElementById("dinheiro").innerText = jogador.dinheiro;
}

function atualizarDinheiro(valor) {
    let jogador = JSON.parse(localStorage.getItem("jogador")) || { nome: "Treinador", insignias: 0, dinheiro: 3000 };
    jogador.dinheiro += valor;
    localStorage.setItem("jogador", JSON.stringify(jogador));
    carregarPerfil();
}

function adicionarInsignia() {
    let jogador = JSON.parse(localStorage.getItem("jogador")) || { nome: "Treinador", insignias: 0, dinheiro: 3000 };
    jogador.insignias += 1;
    localStorage.setItem("jogador", JSON.stringify(jogador));
    carregarPerfil();
}

function voltar() {
    window.location.href = "pallet_town.html";
}
