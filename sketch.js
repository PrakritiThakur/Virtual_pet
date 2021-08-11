var dog,sadDog,happyDog;
var feedButton,foodButton;
var foodObject;
var database,foodStock;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happyDog.png");
}

function setup() {
  createCanvas(1000,400);
  
  database = firebase.database();

  foodObject = new Food();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedButton = createButton('FEED');
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog);
  foodButton = createButton('ADD FOOD');
  foodButton.mousePressed(addFood(1));



}

function draw() {
  background(46,139,87);
  foodObject.display();
  //var dir = foodObject.getFoodStock();
  //console.log(dir);
  drawSprites();

}

//function to read food Stock
function readFoodStock(){
  foodS = data.val();
  foodObj.updateFoodStock(foodS);
}
//function to update food stock and last fed time
function updateFoodStock(){
   database.ref('foodStock').update({
     
   })
}
function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    FeedTime : hour()
  })
}

//function to add food in stock
function addFood(foodS){
    foodS++;
    database.ref('/').update({
      Food : foodS
    })
}
function feedDog(){

  dog.addImage(happyDog);

  if(foodObject.getFoodStock()<= 0){
    foodObject.updateFoodStock(foodObject.getFoodStock()*0);
  }
  else{
    foodObject.updateFoodStock(foodObject.getFoodStock()-1);
  }
}
