document.addEventListener("DOMContentLoaded", carregarMochila);

function carregarMochila() {
    let mochila = JSON.parse(localStorage.getItem("mochila")) || [];
    let lista = document.getElementById("itens");

    lista.innerHTML = "";
    mochila.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    });
}

function adicionarItem(item) {
    let mochila = JSON.parse(localStorage.getItem("mochila")) || [];
    mochila.push(item);
    localStorage.setItem("mochila", JSON.stringify(mochila));
}

function voltar() {
    window.location.href = "pallet_town.html";
}
