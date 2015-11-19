$(window).ready(function () {
    draw1();
    draw2();
    draw3();
    draw4();
    draw5();
});

function draw1() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200));
}

function draw2() {
    var c2 = document.getElementById("myCanvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.moveTo(ran(0, 200), ran(0, 200));
    ctx2.lineTo(ran(0, 200), ran(0, 200));
    ctx2.strokeStyle = getRandomColor();
    ctx2.lineWidth = 10;
    ctx2.stroke();
}

function draw3() {
    var c3 = document.getElementById("myCanvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.beginPath();
    ctx3.arc(95, 100, ran(0, 90), 0, 2 * Math.PI);
    ctx3.strokeStyle = '#003300';
    ctx3.lineWidth = 5;
    ctx3.fillStyle = getRandomColor();
    ctx3.fill();
    ctx3.stroke();
}

function draw4() {
    var ctx4 = document.getElementById('myCanvas4');
    var ctx4 = ctx4.getContext('2d');

    ctx4.beginPath();
    ctx4.bezierCurveTo(ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200));
    ctx4.bezierCurveTo(ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200));
    ctx4.bezierCurveTo(ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200), ran(0, 200));

    ctx4.closePath();
    ctx4.lineWidth = 5;
    ctx4.fillStyle = getRandomColor();
    ctx4.fill();
    ctx4.strokeStyle = getRandomColor();
    ctx4.stroke();
}

function draw5() {
    var i = 10;
    var c5 = document.getElementById("myCanvas5");
    var ctx5 = c5.getContext("2d");
    ctx5.fillStyle = 'green';
    ctx5.fillRect(10, 100, 20, 20);

    function animar() {
        if (i < 180) {
            ctx5.clearRect(0, 0, c5.width, c5.height);
            ctx5.fillRect(i+=5, 100, 20, 20);
            window.requestAnimationFrame(animar);
        }
    }
    //window.setTimeout(animar(), 10);
    animar();
}

function ran(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}