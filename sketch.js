var dog;
var database;
var foodS, foodStock;
function preload(){
    dogimage = loadImage("images/dogImg.png");
    happyDogimage = loadImage("images/dogImg1.png");
}

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    dog = createSprite(250,250,10,10);
    dog.addImage(dogimage);
    dog.scale = 0.5
    foodStock = database.ref("Food");
    foodStock.on("value", readStock);
}

function draw(){
    background("white");
    if(keyDown(UP_ARROW)){
        writeStock(foodS)
        dog.addImage(happyDogimage);
    }
    
    drawSprites();
}

function readStock(data){
    foodS=data.val();
}

function writeStock(x){
    if(x<=0){
        x=0;
    }else{
        x=x-1;
    }
   database.ref("/").update({
        Food: x
        })

}



