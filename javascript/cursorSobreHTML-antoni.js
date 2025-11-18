// CURSOR SOBRE PÁGINA
const html = document.getElementsByTagName('html')[0];

html.addEventListener('mousedown', onMouseDown);
html.addEventListener('mouseup', onMouseUp);


function onMouseDown(e) {
    html.classList.add('moving');
}

function onMouseUp(e) {
    html.classList.remove('moving');
}

// CURSOR SOBRE IMAGEN 1

const image1 = document.getElementById('image1');

image1.addEventListener('mouseover', onMouseOver);
image1.addEventListener('mousedown', onMouseDown);
image1.addEventListener('mouseup', onMouseUp);
image1.addEventListener('mouseout', onMouseOut);

function onMouseOver(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.add('pass');
    }
}
function onMouseDown(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.remove('pass');
    }
    document.getElementsByTagName('html')[0].classList.add('moving');
}
function onMouseUp(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.add('pass');
    }
    document.getElementsByTagName('html')[0].classList.remove('moving');
}
function onMouseOut(e) {
    document.getElementsByTagName('html')[0].classList.remove('pass');
}

// CURSOR SOBRE IMAGEN 2

const image2 = document.getElementById('image2');

image2.addEventListener('mouseover', onMouseOver);
image2.addEventListener('mousedown', onMouseDown);
image2.addEventListener('mouseup', onMouseUp);
image2.addEventListener('mouseout', onMouseOut);

function onMouseOver(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.add('pass');
    }
}
function onMouseDown(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.remove('pass');
    }
    document.getElementsByTagName('html')[0].classList.add('moving');
}
function onMouseUp(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.add('pass');
    }
    document.getElementsByTagName('html')[0].classList.remove('moving');
}
function onMouseOut(e) {
    document.getElementsByTagName('html')[0].classList.remove('pass');
}


// CURSOR SOBRE imagenLista

const elementoLista = document.getElementsByClassName('imagelist');

imagelist.addEventListener('mouseover', onMouseOver);
imagelist.addEventListener('mousedown', onMouseDown);
imagelist.addEventListener('mouseup', onMouseUp);
imagelist.addEventListener('mouseout', onMouseOut);

function onMouseOver(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.add('pass');
    }
}
function onMouseDown(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.remove('pass');
    }
    document.getElementsByTagName('html')[0].classList.add('moving');
}
function onMouseUp(e) {
    if (e.target.id != "") {
        document.getElementById(e.target.id).classList.add('pass');
    }
    document.getElementsByTagName('html')[0].classList.remove('moving');
}
function onMouseOut(e) {
    document.getElementsByTagName('html')[0].classList.remove('pass');
}
