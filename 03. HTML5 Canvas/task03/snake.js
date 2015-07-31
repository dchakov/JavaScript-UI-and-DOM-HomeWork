var canvas = document.getElementById("snake"),
    ctx = canvas.getContext("2d"),
    x = 300,
    y = 200,
    xDir = 0,
    yDir = 0,
    radius = 7,
    stopped = false,
    requestId = undefined,
    img = new Image(),
    imgX = 200,
    imgY = 200,
    fts = 8,
    snake;

ctx.lineWidth = 4;
ctx.strokeStyle = "#black";
ctx.fillStyle = "green"


img.onload = function() {
    generateFood(imgX, imgY);
};
img.src = 'mouse.jpg';

initSnake();
drawSnake();

function draw() {
    ctx.clearRect(1, 1, canvas.width - 2, canvas.height - 2);

    generateFood(imgX, imgY);
    updateSnake();
    drawSnake();

    setTimeout(function() {
        if (!stopped) {
            requestId = window.requestAnimationFrame(draw);
        }
    }, 1000 / fts);
}

function initSnake() {
    var length = 3;
    snake = [];
    for (var i = 0; i < length; i += 1) {
        snake.push({
            x: x + i * 2 * radius,
            y: y
        })
    }
}

function drawSnake() {
    snake.forEach(function(element) {
        snakeElement(element.x, element.y, radius);
    });
}

function snakeElement(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function generateFood(imgX, imgY) {
    ctx.drawImage(img, imgX, imgY, 2 * radius, 2 * radius);
}

function updateSnake() {
    var headX = snake[0].x;
    var headY = snake[0].y;

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                //left
                xDir = -2 * radius;
                yDir = 0;
                break;
            case 38:
                //up
                xDir = 0;
                yDir = -2 * radius;
                break;
            case 39:
                //right
                xDir = +2 * radius;
                yDir = 0;
                break;
            case 40:
                //down
                xDir = 0;
                yDir = +2 * radius;
                break;
        }
    };

    headX += xDir;
    headY += yDir;

    var tail = snake.pop();
    snake.unshift({
        x: headX,
        y: headY
    })

    if (headX >= canvas.width - 1 ||
        headY >= canvas.height - 1 ||
        headX <= 1 ||
        headY <= 1) {
        stopMove();
        gameOver();
        getHighScore();
    }

    if (Math.abs(imgX + radius - headX) <= 7 && Math.abs(imgY + radius - headY) <= 7) {
        imgX = Math.floor((Math.random() * (canvas.width - 2 * radius)));
        imgY = Math.floor((Math.random() * (canvas.height - 2 * radius)));
        snake.push(tail);
    }

    for (var i = 1; i < snake.length; i++) {
        if (snake[i].x === headX && snake[i].y === headY) {
            stopMove();
            gameOver();
            getHighScore();
        }
    }
}

function startMove() {
    if (xDir === 0 && yDir === 0) {
        xDir = -2 * radius;
    }
    if (!requestId) {
        draw();
    }
    stopped = false;
}

function stopMove() {
    if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = undefined;
    }
    stopped = true;
}

function gameOver() {
    ctx.save();
    ctx.font = '45px Arial';
    ctx.fillStyle = 'yellowgreen';
    ctx.fillText('Game Over', 150, 100);


    ctx.font = '18px Arial';
    ctx.fillStyle = 'blue';
    ctx.fillText('Press start for new game', 170, 150);
    ctx.restore();
    x = 300;
    y = 200;
    initSnake();
}

function getHighScore() {
    var player = prompt("Enter your name");
    localStorage.setItem(!!player ? player : 'anonimous', (snake.length - 3) * 10);

    var ulScore = document.getElementById('scoreBoard');

    while (ulScore.lastChild) {
        ulScore.removeChild(ulScore.lastChild);
    }

    var hightScores = [];
    for (var key in localStorage) {
        hightScores.push({
            name: key,
            score: +localStorage[key]
        });
    }

    hightScores.sort(function(a, b) {
        return b.score - a.score;
    });

    var finalHighScores = hightScores.slice(0, 5);
    var counter = 1;

    for (var prop in finalHighScores) {
        document.getElementById('scoreBoard').innerHTML += '<li>' + counter + '.' +
            finalHighScores[prop].name + ' - ' +
            finalHighScores[prop].score + '</li>';
        counter += 1;
    }
}
