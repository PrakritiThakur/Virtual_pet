class Food {
    constructor()  {
      this.foodStock
      this.image = loadImage("Images/Milk.png");
    }
   
    getFoodStock(){
        var getFoodStockRef = database.ref('foodStock');
        getFoodStockRef.on("value",(data) =>{
          if(data.val() !== undefined){
            foodStock= data.val();
          }
        })
        
    }
    updateFoodStock(foodObject){
      database.ref('/').update({
        foodStock :  foodObject
      });
    }
    display(){

      var x =80 , y= 100;

      imageMode(CENTER);
      image(this.image,720,220,100,100);

      if(this.foodStock !== 0){
        for(var i = 0;i<this.foodStock;i++) {
          if(i % 10 === 0){
            x = 80;
            y = y + 50;
          }
          image(this.image , x , y ,50 , 50 );
          x = x + 30;
        }
      }
    }
  }
 