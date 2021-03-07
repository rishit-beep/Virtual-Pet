//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage,happyDogImage;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
databse = firebase.databse();

  console.log(database);
	createCanvas(500, 500);
  
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
  text(500,500,"Note:Press UP_ARROW Key To Feed Drago milk!");
}
function readStock(data){

if(x<=0){
 x=0;
}else{
  x=x-1;
}


database.ref('/').update({
Food:x
})
  

}
}




