var issImage, sc1Image, sc2Image, sc3Image, sc4Image, bgImage;
var iss;
var spacecraft;
var hasDocked= false;




function preload() {
  issImage= loadImage("iss.png")
  bgImage= loadImage("spacebg.jpg")
  sc1Image= loadImage("spacecraft1.png")
  sc2Image= loadImage("spacecraft2.png")
  sc3Image= loadImage("spacecraft3.png")
  sc4Image= loadImage("spacecraft4.png")

  
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);
  iss.scale= 0.40;
  spacecraft = createSprite(285,240);
  spacecraft.addImage(sc1Image);
  spacecraft.scale= 0.15;
}



function draw() {
  background(bgImage);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y -2;
      spacecraft.addImage(sc3Image);
    }
    if(keyDown("DOWN_ARROW")) {
      spacecraft.y = spacecraft.y +2;
      spacecraft.addImage(sc1Image);
    }
    if(keyDown("RIGHT_ARROW")) {
      spacecraft.x = spacecraft.x +2;
      spacecraft.addImage(sc2Image);
    }
    if(keyDown("LEFT_ARROW")) {
      spacecraft.x = spacecraft.x -2;
      spacecraft.addImage(sc3Image);
    }
  }
  //Note to Ariya Vijay Ma'am: Cannot understand the if condition: Something is wrong here.
  // Please check the output
  //Problem is in this code only. This code also affected the KeyDown Keys.
    if(spacecraft.y <= (iss.y+80) && spacecraft.x <= (iss.x-15)){ 
      hasDocked = true; 
      textSize(25); 
      fill("white"); 
      text("Docking Successful!", 200, 300); 
  }
}