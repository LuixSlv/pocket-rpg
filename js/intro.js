let dialogos = [
    "Meu nome é Oak! Mas as pessoas me chamam de Professor Pokémon!",
    "Este mundo é habitado por criaturas chamadas Pokémon!",
    "Para algumas pessoas, os Pokémon são animais de estimação...",
    "Outras os usam para batalhas!",
    "Agora me fale sobre você..."
];

let indice = 0;

function proximoDialogo() {
    if (indice < dialogos.length) {
        document.getElementById("dialogo").innerText = dialogos[indice];
        indice++;
    } else {
        window.location.href = "escolha_pokemon.html";
    }
}
