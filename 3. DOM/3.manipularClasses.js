function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');

    document.querySelector('#exemplo').classList.add('verde');
}
function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}
function azul() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.add('azul');
}

function mudaCor() {
    let preto = document.querySelector('button').classList.contains('preto');
    if (!preto) {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');

    } else {
        document.querySelector('button').classList.add('verde');
        document.querySelector('button').classList.remove('preto');
    }
}