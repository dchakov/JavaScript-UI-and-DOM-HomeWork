(function() {
    var canvas = document.getElementById("bicycle"),
        ctx = canvas.getContext("2d");

    ctx.lineWidth = 4;
    ctx.fillStyle = "#90CAD7";
    ctx.strokeStyle = "#337E90";

    ctx.beginPath();
    ctx.arc(100, 200, 80, 0, 2 * Math.PI);
    ctx.moveTo(480, 200);
    ctx.arc(400, 200, 80, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(270, 200);
    ctx.arc(240, 200, 30, 0.25 * Math.PI, 1.25 * Math.PI);
    ctx.lineTo(200, 160);
    ctx.arc(240, 200, 30, 1.25 * Math.PI, 0.25 * Math.PI);
    ctx.lineTo(280, 240);
    ctx.moveTo(240, 200);
    ctx.lineTo(377, 95);
    ctx.lineTo(200, 95);
    ctx.lineTo(100, 200);
    ctx.lineTo(240, 200);
    ctx.lineTo(180, 70);
    ctx.lineTo(150, 70);
    ctx.lineTo(210, 70);
    ctx.moveTo(400, 200);
    ctx.lineTo(370, 50);
    ctx.lineTo(420, 5);
    ctx.moveTo(370, 50);
    ctx.lineTo(300, 70);
    ctx.stroke();
}());
