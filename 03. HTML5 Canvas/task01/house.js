(function() {
    var canvas = document.getElementById("the-house"),
        ctx = canvas.getContext("2d");

    ctx.lineWidth = 3;
    ctx.fillStyle = "#975B5B";
    ctx.strokeStyle = "#000000";
    ctx.save();
    ctx.fillRect(0, 250, 450, 350);
    ctx.strokeRect(0, 250, 450, 350);
    ctx.restore();

    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(225, 0);
    ctx.lineTo(450, 250);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#000000";
    ctx.save();
    ctx.fillRect(35, 300, 70, 50);
    ctx.fillRect(110, 300, 70, 50);
    ctx.fillRect(35, 355, 70, 50);
    ctx.fillRect(110, 355, 70, 50);

    ctx.fillRect(260, 300, 70, 50);
    ctx.fillRect(335, 300, 70, 50);
    ctx.fillRect(260, 355, 70, 50);
    ctx.fillRect(335, 355, 70, 50);

    ctx.fillRect(260, 450, 70, 50);
    ctx.fillRect(335, 450, 70, 50);
    ctx.fillRect(260, 505, 70, 50);
    ctx.fillRect(335, 505, 70, 50);
    ctx.restore();

    ctx.fillStyle = "#975B5B";
    ctx.save();
    ctx.fillRect(320, 45, 40, 120);
    ctx.restore();

    ctx.fillStyle = "#975B5B";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.save();
    ctx.scale(1, 0.3);
    ctx.arc(340, 145, 20, 0, 2 * Math.PI);
    ctx.restore();
    ctx.fill();
    ctx.stroke();

    ctx.moveTo(320, 45);
    ctx.lineTo(320, 200);
    ctx.moveTo(360, 45);
    ctx.lineTo(360, 200);
    ctx.stroke();

    ctx.moveTo(100, 600);
    ctx.lineTo(100, 445);
    ctx.moveTo(45, 600);
    ctx.lineTo(45, 470);
    ctx.quadraticCurveTo(100, 420, 155, 470);
    ctx.moveTo(155, 600);
    ctx.lineTo(155, 470);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(80, 550, 7, 0, 2 * Math.PI, false);
    ctx.moveTo(128, 550);
    ctx.arc(120, 550, 7, 0, 2 * Math.PI, false);
    ctx.stroke();

}());
