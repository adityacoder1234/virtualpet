//Create variables here
var dog,happydogimg,dogimg,database,food,foodstock;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodstock = database.ref("foods");
  foodstock.on("value", readStock);
foodstock.set(20)
  
dog=createSprite(250,300,10,60);
dog.addImage(dogimg);
dog.scale = 0.2;
}


function draw() { 
  background("green");

  if(food!==undefined)
  {
    textSize(20)
    fill(225);
    text("food remaining: "+food,150,150);
  }

 
 
 if(keyWentUp(UP_ARROW))
 {
   dog.addImage(dogimg);
 }

  if(keyWentDown(UP_ARROW))
  {
    writeStock(food);
    dog.addImage(happydogimg);
  }
 

  if(food === 0)
  {
    food=20;
  }

  drawSprites();
  //add styles here
  
}
function readStock(data)
{
  food = data.val();
}
function writeStock(x)
{
  if(x<=0)
  {
    x=0
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    foods:x,
  });
}


