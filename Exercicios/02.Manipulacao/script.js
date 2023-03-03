/*
-> pegar a palavra do input
-> adicionar a lista quando apertar enter.
*/
const input = document.querySelector('input');
const listaItens = document.getElementById('myList');
const tecla = document.addEventListener('keyup', inserirItem);
function inserirItem(e) {
    item = input.value;
    if (e.key === 'Enter') {
        const novoItem = document.createElement('li');
        novoItem.innerHTML = item;
        listaItens.appendChild(novoItem);
        input.value = '';
    }
}