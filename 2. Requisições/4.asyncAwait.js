// Promesasa.
async function clickou() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    console.log(json[0].title)
    alert('CLICOU!');
}

document.querySelector('#botao').addEventListener('click', clickou);
