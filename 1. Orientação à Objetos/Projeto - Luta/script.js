let char = new Sorcerer('Bernardo');
// let charKnight = new Knight('Bernardo');
let monster = new littleMonster('Crepper');
// let bigMonster = new littleMonster('Herobrine');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
)

stage.start();
