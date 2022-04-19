let particles = [];
const num = 1000;
let d;
var lightX;
var lightY;

const noiseScale = 0.01;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style('display', 'block');
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2 - 50;
  cnv.position(x,y);

  for(let i = 0; i < num; i++) {
    particles.push(createVector(random(width),330));
  }
  stroke(255);
  lightX = width/2;
  lightY = height/2;
}

function draw() {
  background(0,10);
  
//   if(lightX == width){
//     lightXforward = false;
//   }
  
//   if(lightX == 0){
//     lightXforward = true;
//   }
  
//   if(lightXforward){
//     lightX += 50;
//   }else {
//     lightX -= 50;
//   }


  for(let i = 0; i < num; i++){
    let p = particles[i];
    stroke(255,255,255);
    point(p.x,p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a) * d;
    p.y += sin(a) * d;
    if(!onScreen(p)){
      p.x = random(width);
      p.y = 330;
    }
  }
  
  noiseSeed(12);
  d = -1;
  
  // if(mouseX < 300){
  //   noiseSeed(1);
  //   d = 1;
  // }else if(mouseX >= 300){
  //   noiseSeed(2);
  //   d = -1;
  // }
  
}

// function changeSeed(){
//   noiseSeed(millis())
// }

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 100 && v.y <= 600;
}

function centerCanvas(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2 - 50;
    cnv.position(x,y);
  }
  
  function windowResized() {
    centerCanvas();
  }