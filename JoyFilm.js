
var gradient;
var theater;
var charSequence = []
var charSequenceBackwards = []
var clapper;
var clapperx1
var clapperx2
var clapperx3
var clapperx4
var clappery
var clappersize
var collisionP = 0;
var pinkFilm;
var greenFilm;
var orangeFilm;
var blueFilm;
var back;
var playing = 0;
let vid;
let green;
let firstx;
let firsty;
let secondx;
let secondy;
let thirdx;
let thirdy;
var film
var load
var x;
var y;
var moveY;
var moveX;
var c1;
let charLeft;
let charRight;
let charTop;
let charBottom;
var now;
var img;
//var frame;
function preload() {
  gradient = loadImage('images/gradient.png')
  theater = loadImage('images/theater.png')
  load = loadImage('images/load.png')
  clapper = loadImage('images/clapperG.png')
  clapper2 = loadImage('images/clapperP.png')
  clapper3 = loadImage('images/clapperY.png')
  clapper4 = loadImage('images/clapperB.png')
  now = load
  for (let i = 1; i<=8; i++){
    charSequence.push(loadImage('images/Walker' + i + '.png'))
    //console.log(i)
  }
  for (let i = 1; i<=8; i++){
    charSequenceBackwards.push(loadImage('images/Walker' + i + 'I.png'))
  }


}
function setup() {
  var theCanvas = createCanvas(1000, 750);
  theCanvas.style('border', '5px solid #FFFF00' )
  theCanvas.style('display', 'block' )
  theCanvas.style('margin', 'auto' )
  clappery = height - 250
  clappery1 = height - 250
  clappery2 = height - 250
  clappery3 = height - 250
  clappery4= height - 250
  clapperx1 = width/5
  clapperx2 = 2*width/5
  clapperx3 = 3*width/5
  clapperx4 = 4*width/5
  clappersize = 50;
  char1 = new Character(100, 475)

  back = gradient
  charspeed = 2;
  //timer = 5000;
  pinkFilm = createVideo(['joyfilm/felixpink.mov']);
  pinkFilm.hide();
  orangeFilm = createVideo(['joyfilm/beutidoorange.mov']);
  orangeFilm.hide();
  greenFilm = createVideo(['joyfilm/laetusgreen.mov']);
  greenFilm.hide();

  blueFilm = createVideo(['joyfilm/sublimeblue.mov']);
  blueFilm.hide();

  firstx = width/2-25
  firsty = height/4-25
  secondx = width/2-25
  secondy = height/4+25
  thirdx = width/2+25
  thirdy = height/4
  c1 = new clap(clapper, clapperx1, clappery1, clappersize, greenFilm, 0.6, 2.5);
  c2 = new clap(clapper2, clapperx2, clappery2, clappersize, pinkFilm, 3, 3.5);
  c3 = new clap(clapper3, clapperx3, clappery3, clappersize, orangeFilm, 6, 3.4);
  c4 = new clap(clapper4, clapperx4, clappery4, clappersize, blueFilm, 9, 2.8);
}

function draw() {
  // m1 = new MusicExecute();
  // m1.work();
imageMode(CORNER)
image(back, -100,-100, 1500, 1000)

// jump
imageMode(CENTER)


  char1.showDisplay()
  image(now, width/2, height/4, 550, 300);

  charLeft = char1.posX-char1.size/3;
	charRight = char1.posX+char1.size/3;
  charTop = char1.posY-char1.size/3;
	charBottom = char1.posY+char1.size/3;


  c1.action();
  c2.action();
  c3.action();
  c4.action();

  c1.present();

  c2.present();

  c3.present();

  c4.present();





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
    this.size = 100;
  }

    showDisplay(){

      if (keyIsDown(65) || keyIsDown(97) && this.posY == height-50){
        imageMode(CENTER)
        this.posX = constrain(this.posX, 100/2, width -50)
        this.posX -= this.charspeed;
        this.characterPosition = this.posX
        image(charSequenceBackwards[this.frame], this.posX, this.posY, this.size, this.size)
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
        image(charSequence[this.frame], this.posX, this.posY,this.size, this.size)

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
      image(charSequence[4], this.posX, this.posY, this.size, this.size)
      }

      if (keyIsDown(87)) {
          imageMode(CENTER)
          image(charSequence[this.frame], this.posX, this.posY, this.size, this.size)

        // first make sure that they are on the ground and that their fallingSpeed is 0
        if (this.falling == 0 && this.posY>= 375) {
          // give them a nudge up!
          this.falling = this.falling - 5
        }
      }


      // the character's fallingSpeed should ALWAYS be affected by gravity
      this.falling += this.gravity

      // update the character's y position using their fallingSpeed
      this.posY += this.falling

      // if the character is on the ground (375) then their falling speed should reset to 0
      if (this.posY >= 575) {
        this.falling = 0
        this.posY = 575
      }






    }







}
function start(vid){
  vid.loop()
  back = theater;


}

function end(vid){
  vid.stop()
  vid.noLoop()
  now = load;
  vid.noLoop()
  back = gradient;


}




class clap{
  constructor(img, x, y, size, film, moveX, moveY, char){
    this.img = img
    this.x = x;
    this.y = y;
    this.size = size
    this.film = film
    this.moveX = moveX;
    this.moveY = moveY
    this.cLeft = this.x-this.size/2;
  	this.cRight = this.x+this.size/2;
  	this.cTop = this.y-this.size/2;
  	this.cBottom = this.y+this.size/2;
    this.collisionP = 0;
    this.char = char
  }

  present(){
    image(this.img, this.x, this.y, this.size, this.size)
  }


  action(){



  	if (charRight < this.cLeft || charLeft > this.cRight || charBottom < this.cTop || charTop > this.cBottom) {
        console.log("no collide!")
    	}
    	else {

    		console.log("collide!")
        this.collisionP = 1;

    	}



      if (this.collisionP == 1){

        if (this.x >= 100 ){
        this.x -= this.moveX;

        this.y -= this.moveY;
        back = gradient;
        now = this.film

        }

        else {



          if (playing%2==0){
              triangle(firstx, firsty, secondx, secondy, thirdx, thirdy)
              textAlign(CENTER);
              text("WHEN SCENE LOADS, PRESS ANYWHERE TO STOP", width/2, height/2)

          if (mouseIsPressed){
            if ((mouseX > firstx && mouseX < thirdx) && (mouseY > firsty && mouseY < secondy)){

              start(this.film)

              playing = 1;



            }


}

          }

          }


          if (mouseIsPressed && playing%2!=0){
            if ((mouseX < firstx || mouseX > thirdx) && (mouseY < firsty || mouseY > secondy)){
                end(this.film)


            }

          }




        }
}

reset(){
  end(this.film)
}
}
