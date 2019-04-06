window.onload = function() {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let clintwidth = document.documentElement.clientWidth
    let clintheight = document.documentElement.clientHeight;
    let width = canvas.width = clintwidth;
    let height = canvas.height = clintheight;
    let oP = document.querySelector('p');
    let num = 30;

    function demonBall() {
        this.x = randomNumber(30, width - 30);
        this.y = randomNumber(30, height - 30);
        this.r = randomNumber(10, 15);
        this.color = randomColor(0, 255);
    }


    demonBall.prototype.makeDemon = function() {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function ball(x, y, speedx, speedy, r, color) {
        this.x = x;
        this.y = y;
        this.speedx = speedx;
        this.speedy = speedy;
        this.r = r;
        this.color = color;
    }

    function randomNumber(min, max) {
        let a = Math.floor(Math.random() * (max - min) + min);
        if (a == 0) {
            return a + 1;
        } else {
            return a;
        }
    }

    function randomColor() {
        return 'rgb(' + randomNumber(0, 255) + ',' + randomNumber(0, 255) + ',' + randomNumber(0, 255) + ')';
    }

    ball.prototype.clearColor = function() {
        if (this.r) {
            let x1 = demoBal.x - this.x;
            let y1 = demoBal.y - this.y;
            if (Math.sqrt(x1 * x1 + y1 * y1) <= (demoBal.r + this.r)) {
                this.r = 0;
                num--;
                oP.innerHTML = '还剩' + num + '个球';
            }
        }
    }


    ball.prototype.changeColor = function() {
        for (j = 0; j < balls.length; j++) {
            let x = balls[j].x - this.x;
            let y = balls[j].y - this.y;
            if (this != balls[j]) {
                if (Math.sqrt(x * x + y * y) <= (balls[j].r + this.r)) {
                    this.color = randomColor();
                }
            }
        }
    }
    ball.prototype.makeBall = function(r) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    ball.prototype.move = function() {
        if ((this.x - this.r) <= 0) {
            this.speedx = -(this.speedx);
        }
        if ((this.x + this.r) >= width) {
            this.speedx = -(this.speedx);
        }
        if ((this.y + this.r) >= height) {
            this.speedy = -(this.speedy);
        }
        if ((this.y - this.r) <= 0) {
            this.speedy = -(this.speedy);
        }
        this.x += this.speedx;
        this.y += this.speedy;
    }
    let balls = [];

    let demoBal = new demonBall();

    function bround() {
        demoBal.makeDemon();
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);
        while (balls.length < 30) {
            let bal = new ball(randomNumber(30, width - 30), randomNumber(30, height - 30), randomNumber(-10, 10), randomNumber(-10, 10), randomNumber(10, 20), randomColor());
            balls.push(bal);
        }
        for (i = 0; i < balls.length; i++) {
            balls[i].makeBall(10);
            balls[i].move();
            balls[i].changeColor();
            balls[i].clearColor();
        }
        requestAnimationFrame(bround);
    }
    bround();
}