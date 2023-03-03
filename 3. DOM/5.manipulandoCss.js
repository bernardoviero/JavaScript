const botao = document.querySelector('button');

botao.addEventListener('click', mudarCorLista);

function mudarCorLista() {
    const li = document.querySelector('li');
    li.style.backgroundColor = '#00F'
    li.style.fontSize = '35px';
}