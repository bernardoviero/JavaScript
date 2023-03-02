let botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
    console.log('clicou');
    document.querySelector('button').innerHTML = 'Teste';
});


// Manipulando CSS com clique.
function trocarCor() {
    const li = document.querySelector('li');
    console.log(li);

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '20px';
}

function soltou(e) {
    console.log(e.code)
    console.log(e.key)
    console.log(e.shiftKey)
    console.log(e.altKey)
}

// Teclados
document.addEventListener('keypress', () => {
    console.log('pressionada');
});
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);

