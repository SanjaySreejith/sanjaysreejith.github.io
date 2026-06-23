const canvas = document.getElementById("lorenz");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let x = 0.1, y = 0, z = 0;
const sigma = 10;
const rho = 28;
const beta = 8 / 3;
const dt = 0.001;

ctx.clearRect(0, 0, w, h);

function step() {
  const dx = sigma * (y - x);
  const dy = x * (rho - z) - y;
  const dz = x * y - beta * z;

  x += dx * dt;
  y += dy * dt;
  z += dz * dt;
}

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0)";
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 8; i++) {
    step();

    const scale = 15;
    const px = w * 0.75 + x * scale;
    const py = h * 0.5 - (z - 25) * scale;

    ctx.fillStyle = "rgba(21, 88, 57, 0.42)";
    ctx.fillRect(px, py, 1.5, 1.5);
  }

  requestAnimationFrame(draw);
}

draw();