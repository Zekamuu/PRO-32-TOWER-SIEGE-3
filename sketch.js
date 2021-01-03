const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var pltfrm1;
var pltfrm2;
var score;


var block1, block2, block3, block4, block5, block6, block7,

    block8, block9, block10, block11, block12,

    block13, block14, block15,

    block16,
    boxImg;
var polygon, polygonImg;

var slingshot;

function preload(){
    polygonImg = loadImage("polygon.png")
    boxImg = loadImage("Box.jpg");
}

function setup() {
    createCanvas(1500, 800)
    matterEngine = Engine.create();
    matterWorld = matterEngine.world;
    
    createBlocks();
    
    polygon = new Polygons(100, 400, 50);
    World.add(matterWorld, polygon);
    slingshot = new slingShot(polygon.body, {x:200, y:500})

    score = 0;

    Engine.run(matterEngine);
};

function draw() {
    background(0);
    
    showObjs();
    calculateScore();
    textSize(40)
    text("SCORE: "+score, 1200, 40);
    
};
function mouseDragged(){
    if(slingshot.constraint.bodyA != null){
        Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
    }
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode == 32){
        slingshot.attach(polygon.body);
    }
}
function createBlocks(){
    ground = new Boundaries(width / 2, height, width, 50);
    pltfrm1 = new Boundaries(550, 600, 240, 50)
    pltfrm2 = new Boundaries(1100, 400, 200, 50)
    block1 = new Blocks(470, 550, 50, 50);
    block2 = new Blocks(520, 550, 50, 50);
    block3 = new Blocks(570, 550, 50, 50);
    block4 = new Blocks(620, 550, 50, 50);
    block5 = new Blocks(1050, 350, 50, 50);
    block6 = new Blocks(1100, 350, 50, 50);
    block7 = new Blocks(1150, 350, 50, 50);
    block8 = new Blocks(495, 500, 50, 50);
    block9 = new Blocks(545, 500, 50, 50);
    block10 = new Blocks(595, 500, 50, 50);
    block11 = new Blocks(1075, 300, 50, 50);
    block12 = new Blocks(1125, 300, 50, 50);
    block13 = new Blocks(520, 450, 50, 50);
    block14 = new Blocks(570, 450, 50, 50);
    block15 = new Blocks(1100, 250, 50, 50);
    block16 = new Blocks(545, 400, 50, 50);
}
function showObjs(){
    ground.show();
    pltfrm1.show();
    pltfrm2.show();
    block1.show();
    block2.show();
    block3.show();
    block4.show();
    block5.show();
    block6.show();
    block7.show();
    block8.show();
    block9.show();
    block10.show();
    block11.show();
    block12.show();
    block13.show();
    block14.show();
    block15.show();
    block16.show();
    polygon.show();
    slingshot.show();
}
function calculateScore(){
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    if(score == 160){
        textSize(50)
        text("YOU WIN", width/2-100, height/2)
    }
}