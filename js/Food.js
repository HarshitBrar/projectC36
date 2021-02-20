class Food{
    constructor(){
        this.foodStock = 0;
        this.image = loadImage("Images/Milk.png");
    }
    
    display(){
        var x=80;
        var y=80;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock !== 0){
            for(var i = 0;i < this.foodStock;i++){
                if(i%10 === 0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }

    }
    addFood(){
        this.foodStock = this.foodStock + 1;
        database.ref('/').update({
            food:this.foodStock
        })

    }
    feedDog(){
        this.foodStock = this.foodStock -1;
        database.ref('/').update({
            food:this.foodStock
        })
    }
}