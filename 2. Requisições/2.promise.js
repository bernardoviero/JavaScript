// Promesasa.
function clickou() {
    // fetch retorna um promise;
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json)
            console.log(json[0].title)
        })
        .catch((error) => {
            // quando surgir algum problema ele cai aqui.
            console.log('erro na requisição');
            console.log(error);
        })
        .finally(() => {
            // SEMPRE É EXECUTADO
            alert('FIM DA REQUISIÇÃO');
        })
}
document.querySelector('#botao').addEventListener('click', clickou);