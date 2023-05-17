var gifbgvar = 1

function gifbg() {

    if (gifbgvar == 1) {
        document.body.style.backgroundImage = "img/cube-anim.gif";
        gifbgvar = 2;
    } else {
        document.body.style.backgroundColor = 'lightslategray';
        gitbgvar = 1
    }
}