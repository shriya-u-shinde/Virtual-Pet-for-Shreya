//Create variables here
var dog;
var happydog;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg1.png")
  happydog1 = loadImage("images/dogImg.png")
}

function setup() 
{
	createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(350,250,10,10);
  dog.addImage(dog1);
  dog.scale = 0.2

  
  var foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() 
{  
  background("green")
  fill('white');
  textSize(20)
  text("Food: "+foodS, 10, 20);
  


  if(keyDown("up"))
  {
    foodS=foodS+10;
    writeStock(foodS);
    dog.addImage(happydog1);

    
  }

  

  drawSprites();
  //add styles here

  


}

function readStock(data)
    {
      foodS=data.val();
    }

    function writeStock(x)
    {
      database.ref('/').update({
        Food: x
      })
    }



