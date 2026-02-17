import "./style.css";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50); // x, y, width, height， coordinates are the topleft corner of rect
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

let x = canvas.width / 2;
let y = canvas.height - 30;
const dx = 1;
const dy = -1;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(x, y, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;

    window.requestAnimationFrame(draw);
}

draw();
