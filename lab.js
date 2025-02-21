document.addEventListener("DOMContentLoaded", carregarMissoes);

let missoesDisponiveis = [
    { nome: "Capturar um Pokémon", recompensa: "Pokébola" },
    { nome: "Derrotar um treinador", recompensa: "Poção" }
];

function carregarMissoes() {
    let lista = document.getElementById("missoes");
    lista.innerHTML = "";

    missoesDisponiveis.forEach((missao, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${missao.nome} - Recompensa: ${missao.recompensa} <button onclick="aceitarMissao(${index})">Aceitar</button>`;
        lista.appendChild(li);
    });
}

function aceitarMissao(index) {
    alert(`Missão aceita: ${missoesDisponiveis[index].nome}`);
}

function voltar() {
    window.location.href = "pallet_town.html";
}
