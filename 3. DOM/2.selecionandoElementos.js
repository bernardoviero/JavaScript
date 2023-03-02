console.log(document.getElementById('exemplo'));  // id

let classeTeste = document.getElementsByClassName('lista');  // classe
classeTeste.innerHTML = "testeLista";
console.log(classeTeste);

document.getElementsByTagName('button'); // Aqui pelas tags: button, div, input...

document.getElementsByName('email'); // encontra pelo nome

document.querySelector('#exemplo'); // id /  class / tag / name -> retorna apenas o primeiro
// # -> ID, . -> class, nomeTag -> nomeTag.
console.log(document.querySelector('#exemplo'));

document.querySelectorAll('#lista'); // retorna todos
console.log(document.querySelectorAll('#lista'));



