var fonts = ["Permanent Marker", "Montez", "Lobster", "Josefin Sans", "Shadows Into Light", "Pacifico", "Amatic SC", "Orbitron", "Rokkitt", "Righteous", "Dancing Script", "Bangers", "Chewy", "Sigmar One", "Architects Daughter", "Abril Fatface", "Covered By Your Grace", "Kaushan Script", "Gloria Hallelujah", "Satisfy", "Lobster Two", "Comfortaa", "Cinzel", "Courgette"];
var select = document.getElementById("select")

for (var a = 0; a < fonts.length; a++) {
    var opt = document.createElement('option');
    opt.value = opt.innerHTML = fonts[a];
    opt.style.fontFamily = fonts[a];
    select.add(opt);
}

var font = select.value;
select.style.fontFamily = select.value;

var fontsize = document.getElementById("fontsize").value;
var col = getRandomColor();
document.getElementById("color").value = col;


var canvas = document.getElementById("cv");
var form = document.getElementById("form");
var ctx = canvas.getContext("2d");
var time = parseInt(document.getElementById("second").value) + parseInt(document.getElementById("min").value * 60);

timer = setInterval(draw, 10)
clock = setInterval(countdown, 1000)

const selectMin = document.querySelector('#min');
selectMin.addEventListener('change', (event) => {
    time = parseInt(document.getElementById("second").value) + parseInt(document.getElementById("min").value * 60);
});

const selectSec = document.querySelector('#second');
selectMin.addEventListener('change', (event) => {
    time = parseInt(document.getElementById("second").value) + parseInt(document.getElementById("min").value * 60);
});

function draw() {
    form.width = window.innerWidth * .98;
    form.height = window.innerHeight * .98;
    canvas.height = form.height - 50;
    canvas.width = form.width - 50;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = col;
    ctx.font = document.getElementById("fontsize").value + "px " + font;

    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    var txt = minutes + ":" + (seconds).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    });

    var xsize = ctx.measureText(txt).width - 1;
    var ysize = document.getElementById("fontsize").value - 1;
    ctx.textBaseline = "top";

    var x = (canvas.width - xsize) / 2
    var y = (canvas.height - ysize) / 2

    ctx.fillText(txt, x, y)
}

function countdown() {
    if (time > 0)
        time--;
    else time
}

function fontChange() {
    font = select.value;
    select.style.fontFamily = select.value;
}

function colorChange() {
    console.log(document.getElementById("color").value);
    col = document.getElementById("color").value;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}