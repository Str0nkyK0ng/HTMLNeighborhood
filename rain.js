// #### BACKGROUND RAIN CODE ####

const canvasRain = document.getElementById('backgroundCanvas');
const ctxRain = canvasRain.getContext('2d');
canvasRain.width = window.innerWidth;
canvasRain.height = window.innerHeight;

// We want to make a bunch of raindrops, so we'll make an array to hold them
let rainDrops = [];

// We can set some variables to control how many raindrops we want, and how fast they should move
let rainDropCount = 500;
let rainDropSpeed = 5;

// A class is a collection of information, and some functions to interact with it.
// For our "RainDrop" it'll have an X and Y position, a length, a speed, and a color.
class RainDrop {
  x = Math.random() * canvasRain.width;
  y = Math.random() * canvasRain.height;
  length = Math.random() * 10 + 10;
  speed = Math.random() * 10 + rainDropSpeed;

  // we can also write functions inside of classes, so lets write code to tell the raindrop how to draw itself

  draw() {
    // change the alpha value based off of speed, but otherwise all the draindrops are white-ish RBG(173, 216, 230)
    ctxRain.fillStyle = `rgba(173, 216, 230, ${
      (this.speed - rainDropSpeed) / 10
    })`;

    ctxRain.fillRect(this.x, this.y, 2, this.length);
  }

  update() {
    // tell the raindrop to move down
    this.y += this.speed;
    // if we are off the canvas, go back to the top
    if (this.y > canvasRain.height) {
      this.y = 0;
    }
  }
}

//All of these functions are just in charge of moving/manging the raindrops
function createRain() {
  for (let i = 0; i < rainDropCount; i++) {
    rainDrops.push(new RainDrop());
  }
}

function drawRain() {
  for (let i = 0; i < rainDrops.length; i++) {
    rainDrops[i].draw();
  }
}

function updateRain() {
  for (let i = 0; i < rainDrops.length; i++) {
    rainDrops[i].update();
  }
}
//finally, we can define what "animation" means (clearing the current drops, then drawing and updating the new raindrops)
function animateRain() {
  ctxRain.clearRect(0, 0, canvasRain.width, canvasRain.height);
  drawRain();
  updateRain();
  requestAnimationFrame(animateRain);
}

//finally, we call create and animate to get the rain going!
createRain();
animateRain();
