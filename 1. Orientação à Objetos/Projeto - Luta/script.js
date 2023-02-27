let log = new Log(document.querySelector('.log'));
let char = new Sorcerer('Bernardo');
// let charKnight = new Knight('Bernardo');
let monster = new bigMonster('Teste');
// let bigMonster = new littleMonster('Herobrine');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log,
)

stage.start();
