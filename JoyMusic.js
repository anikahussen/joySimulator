var posX;
var posY;
var charspeed;
var backX = 0
var characterPosition;
var charSequence = []
var charSequenceBackwards = []
var gravity;
var falling;
var jumpend;
var char1;
var r;
var b; 
var g;
var x;
var y;
var jArr = []
var red;
var green;
var blue;
var xpo;
var ypo;
var theParticles = [];
var on = 1;
var reds = [81, 252, 255, 255, 145]
var greens = [229, 239, 147, 208, 245]
var blues = [255, 239, 79, 56, 173]
var rcol
var keyHeight;
var keyHeight1;
var keyHeight2;
var keyHeight3;
var keyHeight4;
var keyHeight5;
var piano_do
var piano_re
var piano_mi
var piano_fa
var piano_la
let count = 0;
var barstart = 10;
var place;
var bubble = [];
var bg = 0;
var timer = 30;
var bgpic;
var happy;


//var frame;
function preload() {



  for (let i = 1; i<=8; i++){
    charSequence.push(loadImage('images/Walker' + i + '.png'))
    //console.log(i)
  }
  for (let i = 1; i<=8; i++){
    charSequenceBackwards.push(loadImage('images/Walker' + i + 'I.png'))
  }

  bgpic = loadImage('images/yellow.png');
  happy = loadImage('images/happy.png');


  piano_do = loadSound('piano_sounds/do.wav')
  piano_re  = loadSound('piano_sounds/re.wav')
  piano_mi = loadSound('piano_sounds/mi.wav')
  piano_fa = loadSound('piano_sounds/fa.wav')
  piano_la = loadSound('piano_sounds/la.wav')

}
function setup() {
  var theCanvas = createCanvas(1000, 500);
  theCanvas.style('border', '5px solid #FFFF00' )
  theCanvas.style('display', 'block' )
  theCanvas.style('margin', 'auto' )
  keyHeight = height-50
  keyHeight1 = height-50
  keyHeight2 = height-50
  keyHeight3 = height-50
  keyHeight4 = height-50
  keyHeight5 = height-50

  char1 = new Character(width / 2, keyHeight )
  char2 = new Character(width / 2, keyHeight )

  charspeed = 2;
  //timer = 5000;
 
    bar1 = new joyBar(reds[0], greens[0], blues[0], barstart, barstart, 0.7)
    bar2 = new joyBar(reds[1], greens[1], blues[1], barstart, barstart+30, 0.5)
    bar4 = new joyBar(reds[2], greens[2], blues[2], barstart, barstart+60, 0.3)
    bar5 = new joyBar(reds[4], greens[4], blues[4], barstart, barstart+90, 0.1)

  

}

function draw() {
  // m1 = new MusicExecute();
  // m1.work();
  
  m1 = new MusicExecute();
  m1.work()




  }

 



  
class MusicExecute {
  constructor(){

  }
  work(){
    imageMode(CORNER);
  image(bgpic, -40,-40, 1500, 600)
  noStroke();

  if (bar1.width != 150){

 if (char1.place==1){
  bar1.powerUp()
}
else {
   bar1.powerDown()

}
}
 if (bar2.width != 150){

 if (char1.place==2){
  bar2.powerUp()
 }
 else {
   bar2.powerDown()

}
}

 if (bar4.width != 150){
 if (char1.place==3){
  bar4.powerUp()
 }
 else {
   bar4.powerDown()

}
}
if (bar5.width != 150){
 if (char1.place==4){
  bar5.powerUp()
 }
 else {
   bar5.powerDown()

}
 }

 bar1.show()
 bar2.show()
 bar4.show()
 bar5.show()

 
 strokeWeight(3)
 fill(255)
 text("L a e t u s", barstart*5, barstart*2.5)
 text("F e l i x", barstart*5, barstart*5.5)
 text("B e a u t i d o", barstart*5, barstart*8.5)
 text("S u b l i m e", barstart*5, barstart*11.5)

  rcol = int(random(0, 7))
  //rcol = random(0, 6);
  //console.log(on)
  noStroke()
  fill (81, 229, 255)
  rect(0, keyHeight1, width/5, 55, 20, 20, 0, 0);
  fill (252, 239, 239)
  rect(width/5, keyHeight2, width/5, 55, 20, 20, 0, 0);

  fill (255, 147, 79)
  rect(width/5*3, keyHeight4, width/5, 55, 20, 20, 0, 0);
  fill (145, 245, 173)
  rect(width/5*4, keyHeight5, width/5, 55, 20, 20, 0, 0);
  noFill()
  stroke(255)
  rect(width/5*2, keyHeight3, width/5, 55, 20, 20, 0, 0);
  noStroke()
  //count = 0;
  char1.move();
  //console.log(count)
  char1.showDisplay();
  // if (((keyIsDown(68) || keyIsDown(100))) && characterPosition >= 920 && backX >= -2000){
  //  backX -= 2;
  // }
  // if (((keyIsDown(65) || keyIsDown(97))) && characterPosition <= 48 && backX < 0) { 
  


  if (on% 2==0){
    fill(255);
    rect((width/2-25), (height/2-25), 10, 50)
    rect((width/2+25), (height/2-25), 10, 50)
  }
  else {
      fill (255);
      triangle(width/2-25, height/2-25, width/2-25, height/2+25, width/2+25, height/2)
      triangle()
      rectMode(CORNER);
  }


  if (mouseIsPressed) {
    if (mouseX<width/2-25 || mouseX>width/2+25 || mouseY<height/2-25 || mouseY>height/2+25){

        theParticles.push( new Particle(mouseX,mouseY, reds, greens, blues, rcol) );
     }
  }

    
   
  // every frame we have to draw all particles
  for (var i = 0; i < theParticles.length; i++) {
    // display the particle and ask it if it is small enough to be removed

    var result = theParticles[i].moveAndDisplay();

    // if it is super small we have to remove it from the array
    if (result == true) {
      // remove it from the array using the 'splice' function
      // this takes two arguments - the element to begin removing from the list
      // and how many elements to remove (generally we only remove 1 at a time)
      theParticles.splice(i, 1);

      i = i - 1;
    }

  }



  if (bar1.width == 150 && bar2.width == 150 && bar4.width == 150 && bar5.width == 150 && timer>0){
    textSize(100)
    imageMode(CORNER)
    image(happy, 0,0, width, height)
    fill(reds[rcol], greens[rcol], blues[rcol])
    text ("J O Y", width/2, height/3 )
    textSize(12)
    bg = 200
    on = 1;

 

  }
  else if (timer == 0 && (bar1.width != 150 || bar2.width != 150 || bar4.width != 150 || bar5.width != 150)) {
    textAlign(CENTER, CENTER);
    textSize(50)
    text ("JOY IS NOT FAR AWAY", width/2, height/4 )
    piano_do.stop()
    piano_re.stop()
    piano_mi.stop()
    piano_fa.stop()
    piano_la.stop()
  }


  fill(255)
  textAlign(CENTER, CENTER);
  textSize(30);
  text(timer, width/2, height/3);
  textSize(12)

if (on%2 ==0 && frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }

  

  }
}
  



class Character {
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.charspeed = 2;
    this.frame = 0;
    this.lastFrameChange = millis();
    this.gravity = 0.1;
    this.falling = 0;
    this.jumpend = 0
    this.place = 0;
  }

    showDisplay(){

      if (keyIsDown(65) || keyIsDown(97) && this.posY == height-50){
        imageMode(CENTER)
        this.posX = constrain(this.posX, 100/2, width -50)
        this.posX -= this.charspeed;
        this.characterPosition = this.posX
        image(charSequenceBackwards[this.frame], this.posX, this.posY, 100, 100)
      }

      if (millis() - this.lastFrameChange > 100) {
        this.frame += 1
        if (this.frame == charSequence.length){
          this.frame = 0;
        }
        this.lastFrameChange = millis()
      }

      if (keyIsDown(68) || keyIsDown(100) && this.posY == height-50){
        imageMode(CENTER)
        this.posX = constrain(this.posX, 100/2, width-50)
        this.posX += this.charspeed;
        this.characterPosition = this.posX
        image(charSequence[this.frame], this.posX, this.posY, 100, 100)

      }
      if (millis() - this.lastFrameChange > 100) {
        this.frame += 1
        if (this.frame == charSequence.length){
          this.frame = 0;
        }
        this.lastFrameChange = millis()
      }
      if (keyIsPressed != true){
      imageMode(CENTER)
      image(charSequence[4], this.posX, this.posY, 100, 100)
      }
    }

      
        
      
      move(){
        
  // if the character is on the ground (375) then their falling speed should reset to 0
  if (this.posY >= height-80) {
    
   
    this.posY = height-80
   //this.jumpend = 1
    if (on% 2==0){
    if (this.posX>0 && this.posX<width/5) {
      this.place = 1;
      
      let j = new Joy_Bubbles(81, 229, 255, 100, 450);
      j.splay()
 

      if (piano_do.isPlaying() == false){
       piano_do.play()
       piano_la.stop()
        piano_re.stop()
        piano_mi.stop()
        piano_fa.stop()
        
      }
       

      
      
      if (piano_do.isPlaying()){
        if (keyHeight1 < (height-30)){
         keyHeight1 += 1;

        }
      }


      

      //try decrementing specific key height here?
      //to get illusion of key going down?

  }
  else {
    if (keyHeight1 > keyHeight){
      keyHeight1 -=1

    }
      }
   if (this.posX>width/5 && this.posX<width/5*2) {
    this.place = 2;
      let j = new Joy_Bubbles(252, 239, 239, 300, 450);
      j.splay()
      if (piano_re.isPlaying() == false){
        piano_re.play()
        piano_do.stop()
        piano_mi.stop()
        piano_fa.stop()
        piano_la.stop()
    }

   
      
      if (piano_re.isPlaying()){
        if (keyHeight2 < (height-30)){
         keyHeight2 += 1;

        }
      }

      }
  else {
    if (keyHeight2 > keyHeight){
      keyHeight2-=1
    }
      }
 
  
   if (this.posX>width/5*3 && this.posX<width/5*4) {
    this.place = 3;
      let j = new Joy_Bubbles(255, 208, 56, 700, 450);
      j.splay()
      if (piano_fa.isPlaying() == false){
        piano_fa.play()
        piano_do.stop()
        piano_mi.stop()
        piano_re.stop()
        piano_la.stop()
      }
      if (piano_fa.isPlaying()){
        if (keyHeight4 < (height-30)){
         keyHeight4 += 1;

        }
      }

      }
  else {
    if (keyHeight4 > keyHeight){
      keyHeight4-=1
    }
      }

   if (this.posX>width/5*4 && this.posX<width) {
      this.place = 4;
      let j = new Joy_Bubbles(145, 245, 173, 900, 450);
      j.splay()
      if (piano_la.isPlaying() == false){
        piano_la.play()
        piano_do.stop()
        piano_re.stop()
        piano_mi.stop()
        piano_fa.stop()

      }
      if (piano_la.isPlaying()){
        if (keyHeight5 < (height-30)){
         keyHeight5 += 1;

        }
      }

      }
  else {
    if (keyHeight5 > keyHeight){
      keyHeight5-=1
    }
      }

}
}

if (on% 2==0 && this.posX>0 && this.posX<width/5) {
  this.posY = keyHeight1 - 30
}

if (on% 2==0 && this.posX>width/5 && this.posX<width/5*2) {
  this.posY = keyHeight2 - 30
}


if (on% 2==0 && this.posX>width/5*3 && this.posX<width/5*4) {
  this.posY = keyHeight4 - 30
}
if (on% 2==0 && this.posX>width/5*4 && this.posX<width) {
  this.posY = keyHeight5 - 30
}
  if (this.posX>width/5*2 && this.posX<width/5*3){
        piano_do.stop()
        piano_re.stop()
        piano_mi.stop()
        piano_fa.stop()
        piano_la.stop()

    }

     if (on%2!=0){
        piano_do.stop()
        piano_re.stop()
        piano_mi.stop()
        piano_fa.stop()
        piano_la.stop()

    }




}







}
    





class Joy_Bubbles {
  //initialize variables
  constructor(red, green, blue, xpo, ypo) {
    this.x = xpo;
    this.y = ypo;
    this.vx = random(-2,2);
    this.vy = random(-8, -8);
    this.alpha = 255;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.jArr = [];

  }

  //method for when the fire fades away
  end() {
    return this.alpha < 0;
  }

  //spreading the fire and updating the transparency and hue
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
    
  }

  //method to show the fire 
  show() {
    noStroke();
    fill(this.red, this.green, this.blue, this.alpha);
    ellipse(this.x, this.y, 16);
  }



 splay (){
  for (let i = 0; i < 5; i++) {
    
      jArr.push(this);
  }
  //For all objects in fire array (counting down)
  for (let i = jArr.length - 1; i >= 0; i--) {
    jArr[i].update();
    jArr[i].show();
    //when fire fades away, remove current iterating object from array
    if (jArr[i].end()) {
      jArr.splice(i, 5);
    }
  
    }


    

 }



}


//  backX += 2 }





function Particle(startx,starty, reds, greens, blues, ran) {
  // all particles should store their initial starting position
  this.x = startx;
  this.y = starty;
  //this.rcol = random(0, 6);
  
  this.rcol = ran;
  //console.log("ran" + this.rcol)

  this.reds = reds
  this.greens = greens
  this.blues = blues

  // var colors = ['51e5ff','fcefef','ff934f','ffd038','91f5ad']
  // var color = int(random(4))

  // all particles need a size
  this.size = 25;

  // all particles should pick a random speed
  this.xSpeed = random(-3,3);
  this.ySpeed = random(-3,3);

  // all particles need to be able to move and display themselves
  this.moveAndDisplay = function() {
    // move
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // adjust size down a little bit
    this.size -= 0.2;
    this.size = constrain(this.size, 0, 25);
    fill (this.reds[this.rcol], this.greens[this.rcol], this.blues[this.rcol])
    ellipse(this.x, this.y, this.size, this.size);


    // if(mouseX<200){
    //   fill("#51e5ff");
    //   noStroke();
    // }

    // if(mouseX>200 && mouseX <400){
    //   fill("#fcefef");
    //   noStroke();
    // }

    // if(mouseX>400 && mouseX <600){
    //   fill("#ff934f");
    //   noStroke();
    // }

    // if(mouseX>600 && mouseX <800){
    //   fill("#ffd038");
    //   noStroke();
    // }

    // if(mouseX>800 && mouseX <1000){
    //   fill("#91f5ad");
    //   noStroke();
    // }
  

    // have the function return true if the particle is so small that it can be safely removed
    if (this.size <= 0) {
      return true;
    }
    else {
      return false;
    }
  }
}


class joyBar{
  constructor(r, g, b, x, y, power){
    this.r = r;
    this.g =g;
    this.b = b;
    this.x = x;
    this.y = y;
    this.width = 149; 
    this.height = 25;
    this.pow =  power;
    this.down = 1
  }

  show(){
    fill (this.r, this.g, this.b)
    this.width = constrain(this.width, 1, 150)
    rect(this.x, this.y, this.width, this.height)
  }

  powerDown (){
    if (this.width>0 && on%2==0){
      this.width-=this.pow
    }
  }

  powerUp(){
    if (this.width<=150 && on%2==0){
      this.width+=this.pow
    }
   
  }




}







  function mouseReleased(){
  if (mouseX>((width/2)-25) && mouseX<((width/2)+25)){
    on +=1;


  }
}


