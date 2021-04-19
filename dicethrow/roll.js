const dice = document.getElementById('cube').classList;
const upDown = document.getElementById('plane').classList;

function rollButton() {
    dice.add('roll');
    setTimeout(stop, 2000);
    upDown.add('throw');

    let roll = Math.ceil(6*Math.random());
    re(roll);
}

function stop() {
    dice.remove('roll');
    upDown.remove('throw');
}
