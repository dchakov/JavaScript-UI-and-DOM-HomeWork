(function() {
    var canvas = document.getElementById("the-head"),
        ctx = canvas.getContext("2d");

    ctx.lineWidth = 3;
    ctx.fillStyle = "#90CAD7";
    ctx.strokeStyle = "#337E90";

    // head
    ctx.save();
    ctx.scale(1.2, 1);
    ctx.arc(100, 280, 90, 0, 2 * Math.PI);
    ctx.restore();
    ctx.fill();
    ctx.stroke();

    //eyes outhside
    ctx.beginPath();
    ctx.scale(2, 1);
    ctx.arc(30, 260, 10, 0, 2 * Math.PI, false);
    ctx.moveTo(80, 260);
    ctx.arc(70, 260, 10, 0, 2 * Math.PI, false);
    ctx.stroke();

    //eyes inside
    ctx.beginPath();
    ctx.fillStyle = "#337E90";
    ctx.save();
    ctx.scale(0.4, 2);
    ctx.arc(65, 130, 4, 0, 2 * Math.PI, false);
    ctx.arc(165, 130, 4, 0, 2 * Math.PI, false);
    ctx.restore();
    ctx.fill();

    //nose
    ctx.beginPath();
    ctx.moveTo(50, 260);
    ctx.lineTo(40, 300);
    ctx.lineTo(50, 300);
    ctx.stroke();

    //mouth
    ctx.beginPath();
    ctx.save();
    ctx.rotate(Math.PI / 10);
    ctx.scale(1.7, 1);
    ctx.arc(85, 300, 10, 0, 2 * Math.PI, false);
    ctx.restore();
    ctx.stroke();

    //hat mddle
    ctx.fillStyle = "#396693";
    ctx.strokeStyle = "#3A4547";
    ctx.lineWidth = 2;
    ctx.fillRect(30, 50, 60, 150);
    ctx.strokeRect(30, 50, 60, 150);

    //hat down
    ctx.fillStyle = "#396693";
    ctx.strokeStyle = "#3A4547";
    ctx.beginPath();
    ctx.scale(2, 1);
    ctx.arc(30, 200, 28, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    //hat up
    ctx.fillStyle = "#396693";
    ctx.strokeStyle = "#3A4547";
    ctx.beginPath();
    ctx.scale(0.5, 1);
    ctx.arc(60, 50, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    //hat down conus
    ctx.fillStyle = "#396693";
    ctx.strokeStyle = "#3A4547";
    ctx.beginPath();
    ctx.scale(0.8, 1);
    ctx.arc(75, 170, 37, 0, 1 * Math.PI);
    ctx.fill();
    ctx.stroke();

}());
