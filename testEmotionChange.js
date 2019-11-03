let sadness;
let joy;
let anger;
let emotion;
let posX;
let posY;
let charspeed;
let Yspeed;
let grav;
let jump;


function preload() {
	sadness = loadImage("images/sadness.png")
	joy = loadImage("images/joy.png")
	anger = loadImage("images/anger.png")
	char = loadImage("images/charPlaceholder.png")


  }


function setup() {
  createCanvas(1000, 600);
  charspeed = 2;
  ySpeed = 2;
  char1 = new Character(width/2, height-40);
  emotion = sadness;
  grav = 0.1;



}

function draw() {
	imageMode(CENTER);
	image(emotion, width/2, height/2);


	
	
	
	char1.move();
	char1.show();

	if (emotion == sadness && char1.posX>width){
		emotion = joy;
		char1.posX = 100;
	}
	if (emotion == joy && char1.posX>width){
		emotion = anger;
		char1.posX = 100;
	}

	

}

class Character{
	constructor(posX, posY){
		this.posX = posX;
		this.posY = posY;
		this.charspeed = 2;
		this.Yspeed = 2;
	}


	show(){
		imageMode(CENTER);
		image(char, this.posX, this.posY);
	}


	move(){


  		this.posX = constrain(this.posX, char.width/2, width-char.width/2+100)	
  		this.posY = constrain(this.posY, char.width/2, width-char.width/2+100)	
		if ( (keyIsDown(65) || keyIsDown(97))){
			this.posX-= this.charspeed;
		//this.posY = height-78;

	}
	if ((keyIsDown(68) || keyIsDown(100))){
			this.posX += this.charspeed;

		//this.posY = height-78;
		console.log(this.posX);
	}
	if ((keyIsDown(87) || keyIsDown(119))){
		console.log("runn");

		//this.posY = height-78;
		console.log(this.posX);
	}

	}
	

	}




