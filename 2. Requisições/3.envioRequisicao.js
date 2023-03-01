// Promesasa.
function clickou() {
    // GET(pegar), POST(inserir), PUT(editar) E DELETE(excluir)
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json)
            console.log(json[0].title)
        });
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'titulo',
                body: 'corpo',
                userId: 1
            })
        }
    ).then((response) => {
        console.log(json);
    })
}

document.querySelector('#botao').addEventListener('click', clickou);
document.querySelector('#inserir').addEventListener('click', inserir);
