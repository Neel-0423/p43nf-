var h = hour();
text('Current hour:\n' + h, 5, 50);

var m = minute();
text('Current minute: \n' + m, 10, 50);

var s = second();
text('Current second: \n' + s, 15, 50);

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hour();
  minute();
  second();
}

function draw() {
  background("black");  
  drawSprites();

}