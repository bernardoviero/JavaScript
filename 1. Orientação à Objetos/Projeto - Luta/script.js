let log = new Log(document.querySelector('.log'));
let char = new Sorcerer('Bernardo');
let monster = new bigMonster('Monster');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log,
)

stage.start();
