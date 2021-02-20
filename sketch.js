var database;
var foodRef;
var dog,sadDog,happyDog;
var FeedDog,AddFood;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj = new Food()
  
  foodRef = database.ref('food')
  foodRef.on("value",(data)=>{
    foodObj.foodStock = data.val();
  })

  FeedDog = createButton("Feed Dog");
  FeedDog.position(displayWidth/2,100);
  AddFood = createButton("Add Food");
  AddFood.position(displayWidth/2 + 100,100);
}

function draw() {
  background(46,139,87);

  FeedDog.mousePressed(function(){
    foodObj.feedDog();
    dog.addImage(happyDog)
  })

  AddFood.mousePressed(function(){
    foodObj.addFood();
    dog.addImage(sadDog);
  })


  foodObj.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
