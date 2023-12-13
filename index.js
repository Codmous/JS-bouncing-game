// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 1200;
canvas.height = 600;

// Ball object
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  dx: 2,
  dy: 2,
  color: 'red',
};

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
  
  // Bounce off walls
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx *= -1;
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy *= -1;
  }
  
  // Move ball
  ball.x += ball.dx;
  ball.y += ball.dy;
}

// Start animation loop
animate();