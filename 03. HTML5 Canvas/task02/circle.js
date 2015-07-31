var canvas = document.getElementById("circle"),
    ctx = canvas.getContext("2d"),
    x = 50,
    y = 50,
    xDir = +1,
    yDir = +1,
    radius = 10,
    requestId;

ctx.lineWidth = 4;
ctx.strokeStyle = "#black";
ctx.fillStyle = "green"

function circle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}
circle(x, y, radius);

function draw() {
    ctx.clearRect(1, 1, canvas.width - 2, canvas.height - 2);
    if (x + radius == canvas.width) {
        xDir = -1;
    } else if (x == radius + 1) {
        xDir = +1;
    }
    if (y + radius == canvas.height) {
        yDir = -1;
    } else if (y == radius + 1) {
        yDir = +1;
    }
    x += xDir;
    y += yDir;
    circle(x, y, radius);
    requestId = window.requestAnimationFrame(draw);
}

function start() {
    if (!requestId) {
        draw();
    }
}

function stop() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = undefined;
    }
}
