// requisição na prática. 
// Como realizar a requisição ? Utilizaremos uma API 'fake'.
// https://jsonplaceholder.typicode.com/posts

function clickou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json)
        })
}
document.querySelector('#botao').addEventListener('click', clickou);