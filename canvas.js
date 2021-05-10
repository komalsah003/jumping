var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = "orange";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "green";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "brown";
// c.fillRect(300, 300, 100, 100);

// console.log(canvas);

// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "purple";
// c.stroke();

//arc/circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.strokeStyle="rgba(0,0,255,0.5)";
// c.stroke();

// for (var i = 0; i<7; i++) {
//     var x = Math.random() *window.innerWidth;
//     var y = Math.random() *window.innerHeight;
// var randomColor=Math.floor(Math.random()*16777215).toString(16);
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI*2, false);
//                                                      // c.strokeStyle=randomColor;
//      c.strokeStyle = "rgba(0,0,255,0.5)";
//     c.stroke();
//                                                         // console.log(c.strokeStyle);
// }

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'red';
        c.stroke();
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];
for (var i = 0; i <150; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth-radius*2)+radius;
    var y = Math.random() * (innerHeight-radius*2)+radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5) * 8;
    circleArray.push(new Circle(x,y,dx,dy,radius));
    // var circle = new Circle(200, 200, 3, 3, 30);

}
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5) * 8;
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
for(var i=0;i<circleArray.length;i++){
    circleArray[i].update();
}
//     circle.draw();

//     c.beginPath();
//     c.arc(x, y, radius, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
//     if (x + radius > innerWidth || x - radius < 0) {
//         dx = -dx;
//     }

//     if (y + radius > innerHeight || y - radius < 0) {
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;
 }

animate();

// var y = 10;
// function animate() {
//     requestAnimationFrame(animate);
//     //  c.clearRect();
//     c.beginPath();
//     c.fillRect(y, 275, 500, 100);
//     c.fillStyle = "red";
//     // c.stroke();
//     y += 1;

// }

// animate();