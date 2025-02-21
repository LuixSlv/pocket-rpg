document.addEventListener("DOMContentLoaded", carregarEquipe);

function carregarEquipe() {
    let equipe = JSON.parse(localStorage.getItem("equipe")) || [];
    let container = document.getElementById("equipe");

    container.innerHTML = "";
    equipe.forEach(pokemon => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${pokemon}</h3>
                         <img src="sprites/${pokemon.toLowerCase()}.gif">`;
        container.appendChild(div);
    });
}

function adicionarPokemon(nome) {
    let equipe = JSON.parse(localStorage.getItem("equipe")) || [];
    if (equipe.length < 6) {
        equipe.push(nome);
        localStorage.setItem("equipe", JSON.stringify(equipe));
    } else {
        alert("Sua equipe está cheia!");
    }
}

function voltar() {
    window.location.href = "pallet_town.html";
}
