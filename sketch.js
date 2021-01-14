//Create variables here
var Dog,dog,hdog;
var db;
var fs,fst;

function preload()
{
  //load images here
  dog = loadImage("Dog.png");
  hdog = loadImage("happydog.png")

}

function setup() {
  createCanvas(500, 500);
  Dog = createSprite(250,250,50,50);
  Dog.addImage(dog);
  Dog.scale = 0.15;

  db=firebase.database();

  fst = db.ref("food");
  fst.on("value",rs);

  
}


function draw() {  
  background(46, 139, 87)

  Dog.display();

  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)){
    ws(fs);
    Dog.addImage(hdog);

  }
  textSize(15);
  fill(255,0,0)
  text("Food Remaining : "+fs,180,180);
  text("Note: Press Up Arrow Key to Feed Drago ",100,50);

}

function rs(data){
  fs=data.val();
}

function ws(x){

  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }

  db.ref("/").update({
  food : x
})
}

function showError(){
  console.log("error");
}



