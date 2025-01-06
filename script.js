const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const consertar = document.getElementById('consertar');
const lamp = document.getElementById("lamp");

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if ( !isLampBroken() ) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if ( !isLampBroken() ){
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

function consertarLamp() {
    if ( isLampBroken() ) {
        lamp.src = './img/desligada.jpg'
    }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
consertar.addEventListener('click', consertarLamp);
lamp.addEventListener('mouseenter', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
